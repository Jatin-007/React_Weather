import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); // applying midleware to handle certain processes. +  creating redux store

ReactDOM.render(
<Provider store = {createStoreWithMiddleware(reducers)}>
    <App />
</Provider>,
document.getElementById('root'));