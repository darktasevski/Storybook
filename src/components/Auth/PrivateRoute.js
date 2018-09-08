import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, auth, ...rest }) => (
	<Route render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />)} {...rest} />
);

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
