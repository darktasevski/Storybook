import React, { Component, Fragment } from 'react';

import Login from './Login';
import Register from './Register';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../Common/Tabs';
import styles from './Auth.module.css';

const COLORS = ['red', 'blue', 'green', 'yellow'];

export default class Auth extends Component {
	state = {
		currentTab: 0,
	};

	render() {
		const { currentTab } = this.state;
		const color = COLORS[currentTab];

		return (
			<div className={styles.Auth}>
				<Tabs
					activeIndex={this.state.currentTab}
					onChange={index => {
						this.setState({ currentTab: index });
					}}
				>
					<TabList>
						<Tab>Register</Tab>
						<Tab>Login</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Register />
						</TabPanel>
						<TabPanel>
							<Login />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</div>
		);
	}
}
