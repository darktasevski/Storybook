import KeyMirror from 'keymirror';

export const types = new KeyMirror({
	FETCH_STORIES: null,
	FETCH_STORIES_SUCCESS: null,
	FETCH_STORY: null,
	FETCH_STORY_SUCCESS: null,
	CREATE_STORY_SUCCESS: null,
	DELETE_STORY_SUCCESS: null,

	FETCH_COMMENTS: null,
	FETCH_COMMENTS_SUCCESS: null,
	CREATE_COMMENT_SUCCESS: null,
	UPDATE_COMMENT_SUCCESS: null,
	REMOVE_COMMENT_SUCCESS: null,
	CLEAR_COMMENTS: null,

	ACTION_ERROR: null,
	DATA_ERROR: null,
	USER_ERROR: null,

	REGISTER_USER_SUCCESS: null,
	VALIDATE_USER_SUCCESS: null,
	SET_CURRENT_USER: null,
	FETCH_USER: null,
	FETCH_USER_SUCCESS: null,
	UPDATE_USER_SUCCESS: null,
	CLEAR_USER: null,
});

export const baseURL = 'http://www.scripttic.com:8000';
