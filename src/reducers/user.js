import { types } from '../actions/constants';

const initialState = {
	currentUser: {},
	isLoading: false,
	err: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_USER:
			return { ...state, isLoading: true };
		case types.FETCH_USER_SUCCESS:
			return { isLoading: false, currentUser: action.payload, err: null };
		case types.FETCH_USER_FAILURE:
			return { isLoading: false, err: action.payload, currentUser: {} };
		default:
			return state;
	}
};
