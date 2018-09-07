import React from 'react';

import styles from './Heading.module.css';

const Heading = props => {
	return (
		<div className={`${styles.Heading} ${props.storyMode ? styles.Heading__story : ''}`}>
			<h1>{props.heading}</h1>
			<h2>{props.subheading}</h2>
			{props.showSocial ? (
				<div className={styles.Heading__social}>
					<span>Likes: 89</span>
					<span>Share</span>
				</div>
			) : null}
		</div>
	);
};

export default Heading;
