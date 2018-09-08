import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Buttons.module.css';

const Button = ({ text, onClick, small, large, to }) => (
	<NavLink
		to={to}
		onClick={onClick}
		className={`${styles.Button} ${small ? styles.Button__sm : ''} ${large ? styles.Button__lg : ''}`}
		href="#"
	>
		{text}
	</NavLink>
);

export default Button;
