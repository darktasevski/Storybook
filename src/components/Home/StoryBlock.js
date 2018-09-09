import React from 'react';
import Image from 'react-graceful-image';
import PropTypes from 'prop-types';

import Link from '../Common/LinkWithScroll';
import styles from './StoryBlock.module.css';

const StoryBlock = ({ story }) => {
	const { title, posterFirstName, id } = story;
	const storyStr = JSON.stringify(story);

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
				alt="Story's Unsplash pic"
				height="100%"
				src="https://source.unsplash.com/iWMU4CdPoWs"
				width="100%"
			/>
		</div>
	);
};

StoryBlock.propTypes = {
	story: PropTypes.shape({
		id: PropTypes.number,
		posterFirstName: PropTypes.string,
		title: PropTypes.string,
	}).isRequired,
};

export default StoryBlock;

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
