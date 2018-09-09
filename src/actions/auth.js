import axios from 'axios';

import { types, baseURL } from './constants';

export const getUserToken = (email, password, history) => async dispatch => {
	// By default, axios serializes JavaScript objects to JSON.
	// To send data in the application/x-www-form-urlencoded format we need to use URLSearchParams api
	const params = new URLSearchParams();
	params.append('grant_type', 'Bearer');
	params.append('email', email);
	params.append('password', password);
	try {
		const { data: token } = await axios.post(`${baseURL}/oauth2/token`, params);
		const { data: user } = await axios.get(`${baseURL}/api/v1/user`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		await localStorage.setItem('token', token);
		// Set up token expiration
		const now = new Date();
		console.log('now', now);
		now.setTime(now.getTime() + 1 * 3600 * 1000);
		await localStorage.setItem('tokenExp', now);
		await localStorage.setItem('user', JSON.stringify(user));

		dispatch({ type: types.VALIDATE_USER_SUCCESS, payload: user });
		history.push('/');
	} catch (err) {
		return dispatch({ type: types.ACTION_ERROR, payload: 'Authentication error' });
	}
};

export const registerUser = (userData, changeTab) => async dispatch => {
	try {
		await axios.post(`${baseURL}/api/v1/user`, userData);
		changeTab(1);
		dispatch({ type: types.REGISTER_USER_SUCCESS });
	} catch (err) {
		return dispatch({ type: types.AUTH_ERROR, payload: 'Authentication error' });
	}
};

export const setCurrentUser = user => ({
	type: types.SET_CURRENT_USER,
	payload: user,
});

// Log user out
export const logoutUser = () => dispatch => {
	// Remove data from localStorage
	localStorage.removeItem('token');
	localStorage.removeItem('user');
	localStorage.removeItem('tokenExp');
	dispatch(clearUser());
	// Set current user to {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};

export const clearUser = () => ({
	type: types.CLEAR_USER,
});

export const updateUser = userData => async dispatch => {
	try {
		const token = await localStorage.getItem('token');
		const { data } = await axios.put(`${baseURL}/api/v1/user`, userData, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		await localStorage.setItem('user', JSON.stringify(data));
		dispatch({ type: types.UPDATE_USER_SUCCESS, payload: data });
	} catch (err) {
		dispatch({ type: types.AUTH_ERROR, payload: err });
	}
};
