import { types } from '../actions/types';

const initialState = {
	isAuthenticated: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.auth:
			return { ...state };

		default:
			return state;
	}
};
