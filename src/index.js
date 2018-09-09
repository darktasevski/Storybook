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
	const user = JSON.parse(localStorage.getItem('user'));
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(user));
	// Check for expired token
	const currentTime = Date.now();
	if (Date.parse(exp) < currentTime) {
		console.info('Session expired');
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
