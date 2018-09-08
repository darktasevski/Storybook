import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import Logo from '../Common/Logo';
import Button from '../Common/Button';

export default class Nav extends Component {
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
				<Button text="Become a Storyteller" />
			</nav>
		);
	}
}
