import React from 'react';
import classNames from 'classnames';

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
export default SubmitButton;
