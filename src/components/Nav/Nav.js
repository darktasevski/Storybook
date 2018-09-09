import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';
import Logo from '../Common/Logo';
import Button from '../Buttons/Button';
import ProfileButton from '../Buttons/ProfileButton';

const Nav = ({ isAuthenticated, logoutUser, user }) => {
	return (
		<nav className={styles.Nav}>
			<Logo />
			<div className={styles.Nav__links}>
				<NavLink to="/">Story Feed</NavLink>
				<NavLink to="/">Story of the day</NavLink>
				<NavLink to="/">About</NavLink>
			</div>
			<div className={styles.Nav__links__right}>
				{isAuthenticated ? (
					<Fragment>
						<Button to="/story/new" text="Tell your story" small />
						<ProfileButton userId={user.id} logout={logoutUser} />
					</Fragment>
				) : (
					<Button red to="/auth" text="Become a Storyteller" />
				)}
			</div>
		</nav>
	);
};

export default Nav;
