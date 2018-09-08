import React, { Component } from 'react';

import Login from './Login';
import Register from './Register';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../Common/Tabs';

const styles = {
	color: 'hsl(240, 5%, 20%)',
	paddingTop: '8rem',
};

export default class Auth extends Component {
	state = {
		currentTab: 0,
	};

	render() {
		return (
			<div style={styles}>
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
