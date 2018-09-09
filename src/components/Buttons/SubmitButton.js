import React from 'react';

import styles from './Buttons.module.css';

const SubmitButton = ({ red, onClick, text, disable, big }) => (
	<button
		disabled={!!disable}
		type="submit"
		className={`${styles.SubmitButton} ${big ? styles.SubmitButton__big : ''} ${
			red ? styles.SubmitButton__red : ''
		}`}
		onClick={onClick}
	>
		{text}
	</button>
);

export default SubmitButton;
