import { types } from '../actions/types';

const initialState = {
	user: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.user:
			return { ...state };

		default:
			return state;
	}
};
