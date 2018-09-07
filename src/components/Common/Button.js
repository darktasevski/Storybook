import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.css';

const Button = () => {
	return (
		<NavLink to="/auth/login" className={styles.Button} href="#">
			Become a Storyteller
		</NavLink>
	);
};

export default Button;
