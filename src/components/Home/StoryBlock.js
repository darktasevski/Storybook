import React, { Component } from 'react';
import styles from './StoryBlock.module.css';

export default class StoryBlock extends Component {
	render() {
		const { title, posterFirstName } = this.props.story;

		return (
			<div className={styles.StoryBlock}>
				<div className={styles.StoryBlock__info}>
					<h1>{title}</h1>
					<h1>By {posterFirstName}</h1>
				</div>
				<img src="https://picsum.photos/400/600/?random" alt="pic" />
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
