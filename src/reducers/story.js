import { types } from '../actions/constants';

const initialState = {
	stories: [],
	isLoading: false,
	error: null,
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
		default:
			return state;
	}
};
