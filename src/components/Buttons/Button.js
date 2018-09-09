import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Buttons.module.css';

const Button = ({ text, red, onClick, small, large, to, customStyles }) => (
	<NavLink
		to={to}
		onClick={onClick}
		style={customStyles}
		className={`${styles.Button} ${small ? styles.Button__sm : ''} ${large ? styles.Button__lg : ''} ${
			red ? styles.Button__red : ''
		}`}
		href="#"
	>
		{text}
	</NavLink>
);

export default Button;
