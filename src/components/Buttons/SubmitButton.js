import React from 'react';

import styles from './Buttons.module.css';

const SubmitButton = ({ onClick, text, disable, big }) => (
	<button
		disabled={!!disable}
		type="submit"
		className={`${styles.SubmitButton} ${big ? styles.SubmitButton__big : ''}`}
		onClick={onClick}
	>
		{text}
	</button>
);

export default SubmitButton;
