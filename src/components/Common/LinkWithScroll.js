import React from 'react';
import { Link } from 'react-router-dom';

const LinkWithScrollToTop = props => {
	const onClick = () => {
		window.scrollTo(0, 0);
	};

	return <Link {...props} onClick={onClick} />;
};

export default LinkWithScrollToTop;
