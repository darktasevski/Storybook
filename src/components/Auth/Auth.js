import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../Tabs/Tabs';

const styles = {
	color: 'hsl(240, 5%, 20%)',
	paddingTop: '8rem',
};

class Auth extends Component {
	state = {
		currentTab: 0,
	};

	onTabChange = index => this.setState({ currentTab: index });

	render() {
		return (
			<div style={styles}>
				<Tabs activeIndex={this.state.currentTab} onChange={index => this.onTabChange(index)}>
					<TabList>
						<Tab>Register</Tab>
						<Tab>Login</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Register changeTab={this.onTabChange} />
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

export default withRouter(Auth);
