import KeyMirror from 'keymirror';

export const types = new KeyMirror({
	FETCH_STORIES: null,
	FETCH_STORIES_SUCCESS: null,
	FETCH_STORIES_FAILURE: null,

	FETCH_STORY: null,
	FETCH_STORY_SUCCESS: null,
	FETCH_STORY_FAILURE: null,
});

export const baseURL = 'http://www.scripttic.com:8000';
