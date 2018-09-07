import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './StoryBlock.module.css';

export default class StoryBlock extends Component {
	render() {
		const { title, posterFirstName, id } = this.props.story;
		const storyStr = JSON.stringify(this.props.story);
		return (
			<div className={styles.StoryBlock}>
				<div className={styles.StoryBlock__info}>
					<div>
						<h1>{title}</h1>
						<p>By {posterFirstName}</p>
					</div>
					<Link
						to={{
							pathname: `/story/${id}`,
							story: `${storyStr}`,
						}}
						className={styles.StoryBlock__link}
					>
						Read more...
					</Link>
				</div>
				<img src="https://source.unsplash.com/wKjIeK4QSnk/800x800" alt="Unsplash pic" />
			</div>
		);
	}
}

// body: "Text in body"
// datetime: "2018-06-07T15:02"
// id: 20
// posterEmail: "bane@mail.com"
// posterFirstName: "branislav"
// posterId: 19
// posterLastName: "surlan"
// title: "Title"
// cHlldYrKZGo
// 07uiqD9LS6U
