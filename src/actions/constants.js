import KeyMirror from 'keymirror';

export const types = new KeyMirror({
	CREATE_STORY_SUCCESS: null,
	DELETE_STORY_SUCCESS: null,
	UPDATE_STORY_SUCCESS: null,
	FETCH_STORIES_SUCCESS: null,
	FETCH_STORIES: null,
	FETCH_STORY_SUCCESS: null,
	FETCH_STORY: null,

	CLEAR_COMMENTS: null,
	CREATE_COMMENT_SUCCESS: null,
	FETCH_COMMENTS_SUCCESS: null,
	FETCH_COMMENTS: null,
	REMOVE_COMMENT_SUCCESS: null,
	UPDATE_COMMENT_SUCCESS: null,

	ACTION_ERROR: null,
	DATA_ERROR: null,
	USER_ERROR: null,

	CLEAR_USER: null,
	FETCH_USER_SUCCESS: null,
	FETCH_USER: null,
	REGISTER_USER_SUCCESS: null,
	SET_CURRENT_USER: null,
	UPDATE_USER_SUCCESS: null,
	VALIDATE_USER_SUCCESS: null,
});

export const baseURL = 'http://www.scripttic.com:8000';
