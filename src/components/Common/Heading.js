import React from 'react';

import styles from './Heading.module.css';

const Heading = ({ heading, subheading, showSocial, storyMode }) => (
	<div className={`${styles.Heading} ${storyMode ? styles.Heading__story : ''}`}>
		<h1>{heading}</h1>
		<h2>{subheading}</h2>
		{showSocial ? (
			<div className={styles.Heading__social}>
				<span>Likes: 89</span>
				<span>Share</span>
			</div>
		) : null}
	</div>
);

export default Heading;
