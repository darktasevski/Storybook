import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import Logo from '../Common/Logo';
import Button from '../Buttons/Button';

const Nav = ({ isAuthenticated, logoutUser }) => {
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
				{isAuthenticated ? (
					<Fragment>
						<Button to="/" text="Tell your story" small />
						<Button to="/" text="Logout" small onClick={logoutUser} />
					</Fragment>
				) : (
					<Button to="/auth" text="Become a Storyteller" />
				)}
			</div>
		</nav>
	);
};
// Profile link with dropdown in place of logout button?

export default Nav;
