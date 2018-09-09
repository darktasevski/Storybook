import React, { Component } from 'react';
import Image from 'react-graceful-image';

import Link from '../Common/LinkWithScroll';
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
						Read story...
					</Link>
				</div>
				<Image
					src="https://source.unsplash.com/iWMU4CdPoWs"
					width="100%"
					height="100%"
					alt="Story's Unsplash pic"
				/>
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
