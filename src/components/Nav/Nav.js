import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import Logo from '../Common/Logo';
import Button from '../Buttons/Button';
import ProfileButton from '../Buttons/ProfileButton';

const Nav = ({ isAuthenticated, logoutUser, user }) => {
	return (
		<nav className={styles.Nav}>
			<Logo />
			<div className={styles.Nav__links}>
				<NavLink to="/">News</NavLink>
				<NavLink to="/">Nature</NavLink>
				<NavLink to="/">Travel</NavLink>
				<NavLink to="/">Culture</NavLink>
			</div>
			<div className={styles.Nav__links__right}>
				{isAuthenticated ? (
					<Fragment>
						<Button to="/" text="Tell your story" small />
						<ProfileButton userId={user.id} to="/" text="Logout" onClick={logoutUser} logout={logoutUser} />
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
