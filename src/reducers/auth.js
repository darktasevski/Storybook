import { types } from '../actions/types';
import { isEmpty } from '../helpers';

const initialState = {
	isAuthenticated: false,
	err: null,
	user: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.VALIDATE_USER_SUCCESS:
			return {
				isAuthenticated: !isEmpty(action.payload),
				err: null,
				user: action.payload,
			};
		case types.VALIDATE_USER_FAILURE:
			return { isAuthenticated: false, err: action.payload };
		case types.SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
			};
		case types.CLEAR_USER:
			return { ...initialState };
		default:
			return state;
	}
};
