import React from 'react';
import Image from 'react-graceful-image';
import PropTypes from 'prop-types';

import Link from '../Common/LinkWithScroll';
import styles from './StoryBlock.module.css';

const StoryBlock = ({ story }) => {
	const { title, posterFirstName, id } = story;

	return (
		<div className={styles.StoryBlock}>
			<Link to={`/story/${id}`}>
				<div className={styles.StoryBlock__info}>
					<div>
						<h1>{title}</h1>
						<p>By {posterFirstName}</p>
					</div>
				</div>
				<Image
					alt="Story's Unsplash pic"
					style={{ height: '100%', width: '100%' }}
					src="https://source.unsplash.com/8peGuud5cEw"
				/>
			</Link>
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
