import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
	<Route {...rest} component={props => (isAuthenticated ? <Redirect to="/" /> : <Component {...props} />)} />
);

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.bool,
	component: PropTypes.any,
};

export default PublicRoute;
