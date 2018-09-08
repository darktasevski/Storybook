import KeyMirror from 'keymirror';

export const types = new KeyMirror({
	FETCH_STORIES: null,
	FETCH_STORIES_SUCCESS: null,
	FETCH_STORIES_FAILURE: null,

	FETCH_STORY: null,
	FETCH_STORY_SUCCESS: null,
	FETCH_STORY_FAILURE: null,

	FETCH_COMMENTS: null,
	FETCH_COMMENTS_SUCCESS: null,
	FETCH_COMMENTS_FAILURE: null,
	CLEAR_COMMENTS: null,

	CREATE_COMMENT_SUCCESS: null,
	CREATE_COMMENT_FAILURE: null,

	VALIDATE_USER_SUCCESS: null,
	VALIDATE_USER_FAILURE: null,

	SET_CURRENT_USER: null,
	CLEAR_USER: null,

	REGISTER_USER_SUCCESS: null,

	FETCH_USER: null,
	FETCH_USER_SUCCESS: null,
	FETCH_USER_FAILURE: null,
});

export const baseURL = 'http://www.scripttic.com:8000';
