import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { CookiesProvider } from 'react-cookie';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import allReducer from './reducer';
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import './i18n';

ReactDOM.render(
    <Provider store={ store }>
      <React.StrictMode>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
)