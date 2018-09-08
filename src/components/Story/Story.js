import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Image from 'react-graceful-image';

import Footer from '../Footer/Footer';
import Heading from '../Common/Heading';
import Comment from '../Comment/Comment';
import AddComment from '../Comment/AddComment';
import styles from './Story.module.css';
import { fetchStories, fetchComments } from '../../actions/story';

class Story extends Component {
	state = {
		story: {},
	};

	async componentDidMount() {
		const { id } = this.props.match.params;
		await this.props.fetchStories();
		// fetch comments
		this.props.fetchComments(id);
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps.stories !== this.props.stories && this.props.stories.length) {
			const { id } = this.props.match.params;
			const story = this.props.stories.find(story => story.id === parseInt(id, 10));

			this.setState({ story });
		}
	};

	componentWillUnmount = () => {
		// Clear comments for story
		this.props.clearComments();
	};

	render() {
		const { story } = this.state;

		return (
			<section>
				<Heading heading={story.title} showSocial storyMode />
				<article className={styles.Story}>
					<p className={styles.Story__body}>
						{story.body} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
						in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<Image
						src="https://source.unsplash.com/random/800x600"
						width="800"
						height="600"
						alt="My awesome image"
					/>
					<p className={styles.Story__body}>
						{story.body} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
						in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</article>
				<hr />
				<section className={styles.Story__comments}>
					<AddComment />
					{this.props.comments.length
						? this.props.comments.map(comment => {
								return <Comment comment={comment} key={comment.id} />;
						  })
						: 'No comments for this story'}
				</section>
				<Footer />
			</section>
		);
	}
}

const mapStateToProps = state => ({
	stories: state.stories.stories,
	comments: state.stories.comments,
});

const mapDispatchToProps = dispatch => ({
	fetchStories: () => dispatch(fetchStories()),
	fetchComments: id => dispatch(fetchComments(id)),
	clearComments: () => dispatch({ type: 'CLEAR_COMMENTS' }),
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Story)
);
