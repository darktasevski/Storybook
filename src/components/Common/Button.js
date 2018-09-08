import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Button.module.css';

const Button = props => {
	return (
		<NavLink to="/auth/login" className={styles.Button} href="#">
			{props.text}
		</NavLink>
	);
};

export default Button;
