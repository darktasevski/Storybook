import axios from 'axios';

import { types, baseURL } from './types';

export const getUserToken = async (email, password) => {
	// By default, axios serializes JavaScript objects to JSON.
	// To send data in the application/x-www-form-urlencoded format we need to use URLSearchParams api
	const params = new URLSearchParams();
	params.append('grant_type', 'Bearer');
	params.append('email', email);
	params.append('password', password);

	try {
		const token = await axios.post(`${baseURL}/oauth2/token`, params);
		console.log(token);
		return token;
	} catch (err) {
		return err;
	}
};
