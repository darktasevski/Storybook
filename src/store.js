import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import storyReducer from './reducers/story';
import userReducer from './reducers/user';
import authReducer from './reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
	const store = createStore(
		combineReducers({
			stories: storyReducer,
			users: userReducer,
			auth: authReducer,
		}),
		composeEnhancers(applyMiddleware(thunk))
		/* preloadedState, */
		// window.__REDUX_DEVTOOLS_EXTENSION__ &&
		//     window.__REDUX_DEVTOOLS_EXTENSION__(),
	);
	return store;
};
