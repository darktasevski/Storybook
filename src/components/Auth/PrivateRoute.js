import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
	return (
		<Route
			render={props => (auth.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
			{...rest}
		/>
	);
};

PrivateRoute.propTypes = {
	auth: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(PrivateRoute);
