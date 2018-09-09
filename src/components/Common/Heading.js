import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.css';

const Heading = ({ heading, subheading, showSocial, storyMode, date, author }) => (
	<div className={`${styles.Heading} ${storyMode ? styles.Heading__story : ''}`}>
		<h1>{heading}</h1>
		<h2>{subheading}</h2>
		{showSocial ? (
			<div className={styles.Heading__social}>
				<span>
					Likes: 89 <strong>Share</strong>
				</span>
				<p className={styles.Heading__posted}>
					<span>
						{date}・{author}
					</span>
				</p>
			</div>
		) : null}
	</div>
);

Heading.propTypes = {
	author: PropTypes.string,
	date: PropTypes.string,
	heading: PropTypes.string,
	showSocial: PropTypes.bool,
	storyMode: PropTypes.bool,
	subheading: PropTypes.string,
};

export default Heading;
