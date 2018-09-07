import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import styles from './AppRouter.module.css';

import PublicRoute from '../components/Auth/PublicRoute';
import PrivateRoute from '../components/Auth/PrivateRoute';

import Nav from '../components/Nav/Nav';
import Home from '../components/Home/Home';
import Story from '../components/Story/Story';
import EditStory from '../components/Story/EditStory';
import Profile from '../components/User/Profile';
import EditProfile from '../components/User/EditProfile';
import Auth from '../components/Auth/Auth';

const AppRouter = props => {
	return (
		<BrowserRouter>
			<Fragment>
				<Nav isAuthenticated={props.isAuthenticated} logout={props.logout} />
				<div className={styles.App}>
					<Switch>
						<PublicRoute exact path="/" component={Home} />
						<PublicRoute exact path="/story/:id" component={Story} />
						<PrivateRoute path="/story/edit/:id" component={EditStory} />
						<PublicRoute exact path="/user/:id" component={Profile} />
						<PrivateRoute path="/user/edit/:id" component={EditProfile} />
						<PublicRoute path="/auth/login" component={Auth} />
						<PublicRoute path="/auth/register" component={Auth} />
						<Redirect to="/" /> {/*// Custom 404?*/}
					</Switch>
				</div>
			</Fragment>
		</BrowserRouter>
	);
};

export default AppRouter;
