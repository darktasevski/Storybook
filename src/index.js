import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/base-styles/base.css';
import AppRouter from './routes';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
