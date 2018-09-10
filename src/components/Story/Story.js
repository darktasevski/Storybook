import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Image from 'react-graceful-image';
import moment from 'moment';

import Footer from '../Footer/Footer';
import Button from '../Buttons/Button';
import Heading from '../Common/Heading';
import Comment from '../Comment/Comment';
import CommentForm from '../Comment/CommentForm';
import styles from './Story.module.css';
import { fetchStories, fetchComments } from '../../actions/story';

class Story extends Component {
	static propTypes = {
		fetchStories: PropTypes.func.isRequired,
		fetchComments: PropTypes.func.isRequired,
		stories: PropTypes.arrayOf(PropTypes.object),
		comments: PropTypes.arrayOf(PropTypes.object),
		auth: PropTypes.shape({
			user: PropTypes.shape({ id: PropTypes.number }),
			isAuthenticated: PropTypes.bool,
		}),
	};

	state = {
		story: {},
	};

	async componentDidMount() {
		const { id } = this.props.match.params;
		await this.props.fetchStories();
		// fetch comments
		this.props.fetchComments(id);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.stories !== this.props.stories && this.props.stories.length) {
			const { id } = this.props.match.params;
			const story = this.props.stories.find(story => story.id === parseInt(id, 10));

			this.setState({ story });
		}
	}

	componentWillUnmount() {
		this.props.clearComments();
	}

	render() {
		const btnStyles = {
			position: 'absolute',
			bottom: '1rem',
			right: '1rem',
		};
		const {
			auth: { user, isAuthenticated },
		} = this.props;
		const { story } = this.state;

		return (
			<section>
				<Heading
					heading={story.title}
					showSocial
					storyMode
					date={moment(story.datetime).format('DD MMM')}
					author={`${story.posterFirstName} ${story.posterLastName}`}
				/>
				<article className={styles.Story}>
					{story.posterId === user.id ? (
						<Button customStyles={btnStyles} text="Edit Story" small to={`/story/edit/${story.id}`} />
					) : null}
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
						<strong>Buffer text</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
						in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</article>
				<hr />
				<section className={styles.Story__comments}>
					{isAuthenticated ? (
						<CommentForm storyId={story.id} currentUser={user} />
					) : (
						<p style={{ textAlign: 'center', padding: '2rem' }}>
							<Link to="/auth">Sign in</Link> to post comments.
						</p>
					)}
					{this.props.comments.length ? (
						this.props.comments.map(comment => {
							return <Comment comment={comment} storyId={story.id} currentUser={user} key={comment.id} />;
						})
					) : (
						<p style={{ textAlign: 'center', padding: '2rem' }}>No comments for this story</p>
					)}
				</section>

				<Footer />
			</section>
		);
	}
}

const mapStateToProps = state => ({
	stories: state.stories.stories,
	comments: state.stories.comments,
	auth: state.auth,
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
