import React, { Component } from 'react';

import styles from './Logo.module.css';

export default class Logo extends Component {
	render() {
		return (
			<div className={styles.Logo}>
				<p className={styles.Logo__text}>StoryBook</p>
			</div>
		);
	}
}
