import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Buttons.module.css';

const Button = ({ text, onClick, small, to }) => (
	<NavLink to={to} onClick={onClick} className={`${styles.Button} ${small ? styles.Button__alt : ''}`} href="#">
		{text}
	</NavLink>
);

export default Button;
