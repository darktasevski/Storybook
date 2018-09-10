import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchStories } from '../../actions/story';
import Heading from '../Common/Heading';
import StoryBlock from './StoryBlock';
import styles from './Home.module.css';

class Home extends Component {
	static propTypes = {
		stories: PropTypes.arrayOf(PropTypes.object),
		fetchStories: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.fetchStories();
	}

	render() {
		const { stories, isLoading } = this.props;
		return (
			<div>
				<Heading heading="Stories" subheading="That make your day" />
				<div className={styles.Home}>
					{stories.map(story => (
						<StoryBlock story={story} key={story.id} />
					))}
					{!isLoading && stories.length === 0 ? (
						<p className={styles.Home__noStories}>No published stories.</p>
					) : null}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	stories: state.stories.stories,
	isLoading: state.stories.isLoading,
});

const mapDispatchToProps = dispatch => ({
	fetchStories: () => dispatch(fetchStories()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

// <img
// 	src={`https://source.unsplash.com/collection/357786/480x480/?sig=${Math.floor(rand)}`}
// 	alt="Unsplash"
// />
