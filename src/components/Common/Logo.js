import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

const Logo = () => (
	<Link to="/" className={styles.Logo}>
		<p className={styles.Logo__text}>StoryBook</p>
	</Link>
);

export default Logo;
