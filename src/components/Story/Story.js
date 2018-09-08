import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Heading from '../Common/Heading';

import styles from './Story.module.css';
import { fetchStories } from '../../actions/story';

class Story extends Component {
	state = {
		story: {},
	};

	componentDidMount() {
		this.props.fetchStories();
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
					<img src="https://source.unsplash.com/random/800x600" alt="Random image" />
					<p className={styles.Story__body}>
						{story.body} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
						in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</article>
				<Footer />
			</section>
		);
	}
}

const mapStateToProps = state => ({
	stories: state.stories.stories,
});

const mapDispatchToProps = dispatch => ({
	fetchStories: () => dispatch(fetchStories()),
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Story)
);
