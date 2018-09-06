import React from 'react';

import styles from './Heading.module.css';

const Heading = props => {
	return (
		<div className={styles.Heading}>
			<h1>{props.heading}</h1>
			<h2>{props.subheading}</h2>
		</div>
	);
};

export default Heading;
