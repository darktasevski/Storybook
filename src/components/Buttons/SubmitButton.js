import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Buttons.module.css';

const SubmitButton = ({ onClick, text, disable, big, red }) => {
	const btnClass = classNames({
		[styles.SubmitButton]: true,
		[styles.SubmitButton__big]: big,
		[styles.SubmitButton__red]: red,
	});

	return (
		<button disabled={!!disable} type="submit" className={btnClass} onClick={onClick}>
			{text}
		</button>
	);
};

SubmitButton.propTypes = {
	disable: PropTypes.bool,
	large: PropTypes.bool,
	onClick: PropTypes.func,
	red: PropTypes.bool,
	text: PropTypes.string,
};

export default SubmitButton;
