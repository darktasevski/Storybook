import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Buttons.module.css';

const Button = ({ text, red, onClick, customClass, small, large, to, customStyles }) => {
	const btnClass = classNames({
		[styles.Button]: true,
		[styles.Button__sm]: small,
		[styles.Button__lg]: large,
		[styles.Button__red]: red,
	});

	return (
		<NavLink to={to} onClick={onClick} style={customStyles} className={`${btnClass} ${customClass}`}>
			{text}
		</NavLink>
	);
};

Button.propTypes = {
	customStyles: PropTypes.shape({}),
	customClass: PropTypes.string,
	large: PropTypes.bool,
	onClick: PropTypes.func,
	red: PropTypes.bool,
	small: PropTypes.bool,
	text: PropTypes.string,
	to: PropTypes.string,
};

Button.defaultProps = {
	customClass: '',
	onClick: () => {},
	to: '#',
};

export default Button;
