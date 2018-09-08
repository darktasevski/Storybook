import React from 'react';
import { Link } from 'react-router-dom';

export default class LinkWithScrollToTop extends React.Component {
	onClick = () => {
		window.scrollTo(0, 0);
	};

	render() {
		return <Link {...this.props} onClick={this.onClick} />;
	}
}
