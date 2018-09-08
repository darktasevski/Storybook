import { types } from '../actions/constants';

const initialState = {
	stories: [],
	isLoading: false,
	error: null,
	comments: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_STORIES:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case types.FETCH_STORIES_SUCCESS:
			return {
				...state,
				stories: action.payload,
				isLoading: false,
			};
		case types.FETCH_STORIES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case types.FETCH_COMMENTS:
			return {
				...state,
				isLoading: true,
			};
		case types.FETCH_COMMENTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				comments: action.payload,
			};
		case types.FETCH_COMMENTS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case types.CLEAR_COMMENTS:
			return {
				...state,
				comments: [],
			};
		default:
			return state;
	}
};
