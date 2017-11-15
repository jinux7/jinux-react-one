import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '@/index.css';
import '@/assets/css/theme_base/theme_base.css';

// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
	<Provider store={store}>
        <App store={store} />
    </Provider>, 
	document.getElementById('root'));
registerServiceWorker();
