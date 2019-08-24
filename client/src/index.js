import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import App from './components/App';
import './styles/index.css';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

console.log('stripe key is', process.env.REACT_APP_STRIPE_KEY);
console.log('env is', process.env.NODE_ENV);
