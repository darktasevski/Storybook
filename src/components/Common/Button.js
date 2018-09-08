import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.css';

const Button = props => {
	const { text, onClick, small, block, isNavLink } = props;

	return isNavLink ? (
		<NavLink onClick={onClick} to="/auth/login" className={styles.Button} href="#">
			{text}
		</NavLink>
	) : (
		<a to="#" onClick={onClick} className={`${styles.Button} ${styles.Button__alt}`} href="#">
			{text}
		</a>
	);
};
export default Button;
