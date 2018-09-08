import axios from 'axios';

import { types, baseURL } from './constants';

export const fetchStories = () => async dispatch => {
	dispatch({ type: types.FETCH_STORIES });
	try {
		const stories = await axios.get(`${baseURL}/api/v1/article`);
		const { data } = stories;
		return dispatch({ type: types.FETCH_STORIES_SUCCESS, payload: data });
	} catch (err) {
		return dispatch({ type: types.FETCH_STORIES_FAILURE, payload: err });
	}
};

export const fetchComments = id => async dispatch => {
	dispatch({ type: types.FETCH_COMMENTS });
	try {
		const { data } = await axios.get(`${baseURL}/api/v1/article/${id}/comment`);
		return dispatch({ type: types.FETCH_COMMENTS_SUCCESS, payload: data });
	} catch (err) {
		return dispatch({ type: types.FETCH_COMMENTS_FAILURE, payload: err });
	}
};
