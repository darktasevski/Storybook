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

export const createComment = (id, commentData) => async dispatch => {
	try {
		const token = await localStorage.getItem('token');
		const { data } = await axios.post(`${baseURL}/api/v1/article/${id}/comment`, commentData, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		return dispatch({ type: types.CREATE_COMMENT_SUCCESS, payload: data });
	} catch (err) {
		return dispatch({ type: types.CREATE_COMMENT_FAILURE, payload: err });
	}
};

export const createStory = (storyData, history) => async dispatch => {
	try {
		const token = await localStorage.getItem('token');
		const { data } = await axios.post(`${baseURL}/api/v1/article`, storyData, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		});
		console.log('DATA', data);
		dispatch({ type: types.CREATE_STORY_SUCCESS, payload: data });
		history.push(`/story/${data.id}`);
	} catch (err) {
		return dispatch({ type: types.CREATE_STORY_FAILURE, payload: err });
	}
};
