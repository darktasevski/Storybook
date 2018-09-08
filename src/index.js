import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/base-styles/base.css';
import AppRouter from './routes/AppRouter';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import { setCurrentUser, logoutUser, clearUser } from './actions/auth';

const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

// Check for token
if (localStorage.getItem('token')) {
	const exp = localStorage.getItem('tokenExp');
	const user = localStorage.getItem('user');
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(JSON.parse(user)));
	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (exp < currentTime) {
		// Logout user if token has expired
		store.dispatch(logoutUser());
		// Clear current profile
		store.dispatch(clearUser());
		// Redirect to login page
		window.location.href = '/';
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
