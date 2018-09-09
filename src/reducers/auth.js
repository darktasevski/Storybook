import { types } from '../actions/constants';
import { isEmpty } from '../helpers';

const initialState = {
	isAuthenticated: false,
	err: null,
	user: {},
	msg: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.VALIDATE_USER_SUCCESS:
			return {
				isAuthenticated: !isEmpty(action.payload),
				err: null,
				user: action.payload,
			};
		case types.SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
				msg: null,
			};
		case types.UPDATE_USER_SUCCESS:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
			};
		case types.REGISTER_USER_SUCCESS:
			return { ...state, msg: 'Registration successful. You can now log in.' };
		case types.CLEAR_USER:
			return { ...initialState };
		case types.AUTH_ERROR:
			return { isAuthenticated: false, err: action.payload };
		default:
			return state;
	}
};
