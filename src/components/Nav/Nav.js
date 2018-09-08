import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import Logo from '../Common/Logo';
import Button from '../Common/Button';

import { logoutUser } from '../../actions/auth';

class Nav extends Component {
	render() {
		return (
			<nav className={styles.Nav}>
				<Logo />
				<div className={styles.Nav__links}>
					<NavLink to="/">News</NavLink>
					<NavLink to="/">Nature</NavLink>
					<NavLink to="/">Travel</NavLink>
					<NavLink to="/">Culture</NavLink>
				</div>
				<div>
					{this.props.isAuthenticated ? (
						<Fragment>
							<Button text="Tell your story" small />
							<Button text="Logout" small onClick={this.props.logoutUser} />
						</Fragment>
					) : (
						<Button text="Become a Storyteller" isNavLink />
					)}
				</div>
			</nav>
		);
	}
}
// Profile link with dropdown in place of logout button?

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
	logoutUser: () => dispatch(logoutUser()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);
