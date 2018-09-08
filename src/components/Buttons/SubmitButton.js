import React from 'react';

import styles from './Buttons.module.css';

const SubmitButton = ({ onClick, text }) => (
	<button type="submit" className={styles.SubmitButton} onClick={onClick}>
		{text}
	</button>
);

export default SubmitButton;
