import axios from 'axios';

import { baseURL, types } from './constants';

export const fetchUser = uid => async dispatch => {
	try {
		dispatch({ type: types.FETCH_USER });
		const { data } = await await axios.get(`${baseURL}/api/v1/user/${uid}`);
		dispatch({ type: types.FETCH_USER_SUCCESS, payload: data });
	} catch (err) {
		dispatch({ type: types.FETCH_USER_FAILURE, payload: err });
	}
};
