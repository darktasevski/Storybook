import { types } from '../actions/constants';

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
