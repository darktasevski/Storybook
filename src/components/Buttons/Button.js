import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Buttons.module.css';

const Button = ({ text, red, onClick, small, large, to, customStyles }) => {
	const btnClass = classNames({
		[styles.Button]: true,
		[styles.Button__sm]: small,
		[styles.Button__lg]: large,
		[styles.Button__red]: red,
	});

	return (
		<NavLink to={to} onClick={onClick} style={customStyles} className={btnClass}>
			{text}
		</NavLink>
	);
};

export default Button;
