import React, { Fragment } from 'react';
import { connect } from 'react-redux';

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

import { logoutUser } from '../actions/auth';

const AppRouter = props => (
	<BrowserRouter>
		<Fragment>
			<Nav isAuthenticated={props.isAuthenticated} logoutUser={props.logoutUser} logout={props.logout} />
			<div className={styles.App}>
				<Switch>
					<PublicRoute isAuthenticated={props.isAuthenticated} exact path="/" component={Home} />
					<PublicRoute isAuthenticated={props.isAuthenticated} exact path="/story/:id" component={Story} />
					<PrivateRoute
						isAuthenticated={props.isAuthenticated}
						path="/story/edit/:id"
						component={EditStory}
					/>
					<PublicRoute isAuthenticated={props.isAuthenticated} exact path="/user/:id" component={Profile} />
					<PrivateRoute
						isAuthenticated={props.isAuthenticated}
						path="/user/edit/:id"
						component={EditProfile}
					/>
					<PublicRoute isAuthenticated={props.isAuthenticated} path="/auth" component={Auth} />
					<Redirect to="/" /> {/*// Custom 404?*/}
				</Switch>
			</div>
		</Fragment>
	</BrowserRouter>
);

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
	logoutUser: () => dispatch(logoutUser()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppRouter);
