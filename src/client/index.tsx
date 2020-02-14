import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './scss/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('dog-finder-app')
);
