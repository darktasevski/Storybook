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
		case types.CREATE_STORY_SUCCESS:
			return {
				...state,
				stories: [action.payload, ...state.stories],
				isLoading: false,
			};
		case types.UPDATE_STORY_SUCCESS: {
			const filteredStories = state.stories.filter(story => story.id !== action.payload.id);
			return {
				...state,
				stories: [action.payload, ...filteredStories],
				isLoading: false,
			};
		}
		case types.DELETE_STORY_SUCCESS:
			return {
				...state,
				stories: state.stories.filter(story => story.id !== action.payload),
				isLoading: false,
			};
		case types.CREATE_COMMENT_SUCCESS:
			return {
				...state,
				comments: [action.payload, ...state.comments],
				isLoading: false,
			};
		case types.UPDATE_COMMENT_SUCCESS: {
			const filteredComments = state.comments.filter(c => c.id !== action.payload.id);
			return {
				...state,
				comments: [action.payload, ...filteredComments],
				isLoading: false,
			};
		}
		case types.REMOVE_COMMENT_SUCCESS: {
			const filteredComments = state.comments.filter(c => c.id !== action.payload);
			return {
				...state,
				comments: [...filteredComments],
				isLoading: false,
			};
		}
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
		case types.DATA_ERROR:
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
