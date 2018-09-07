import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from './Home.module.css';
import { fetchStories } from '../../actions/story';
import { getUserToken } from '../../actions/auth';
import Heading from '../Common/Heading';
import StoryBlock from './StoryBlock';

class Home extends Component {
	componentDidMount = () => {
		this.props.fetchStories();
	};

	render() {
		console.log(getUserToken('test5@test.com', 'Pass123!'));

		return (
			<div>
				<Heading heading="Stories" subheading="That make your day" />
				<div className={styles.Home}>
					{this.props.stories.map(story => (
						<StoryBlock story={story} key={story.id} />
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	stories: state.stories.stories,
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
