import React from 'react';

import styles from './Footer.module.css';

const Footer = () => (
	<footer className={styles.Footer}>
		<small>More Stories to explore: </small>
		<div className={styles.Footer__content}>
			<aside>Article 1</aside>
			<aside>Article 2</aside>
			<aside>Article 3</aside>
		</div>
		<div className={styles.Footer__bottom}>
			<p>StoryBook &copy;</p>
		</div>
	</footer>
);

export default Footer;
