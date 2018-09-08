import axios from 'axios';

import { types, baseURL } from './types';

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
		now.setTime(now.getTime() + 1 * 3600 * 1000);
		await localStorage.setItem('tokenExp', now);
		await localStorage.setItem('user', JSON.stringify(user));

		dispatch({ type: types.VALIDATE_USER_SUCCESS, payload: user });
		history.push('/');
	} catch (err) {
		return dispatch({ type: types.VALIDATE_USER_FAILURE, payload: 'Authentication error' });
	}
};

export const registerUser = () => {};

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
