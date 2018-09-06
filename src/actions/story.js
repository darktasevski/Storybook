import axios from 'axios';

import { types, baseURL } from './types';

export const fetchStories = () => async dispatch => {
	dispatch({ type: types.FETCH_STORIES });
	try {
		const stories = await axios.get(`${baseURL}/api/v1/article`);
		const { data } = stories;
		console.log(data);
		return dispatch({ type: types.FETCH_STORIES_SUCCESS, payload: data });
	} catch (err) {
		return dispatch({ type: types.FETCH_STORIES_FAILURE, payload: err });
	}
};
