import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { client } from './assets/apollo-client'

import allReducer from './Redux/reducer';
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import './i18n';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <CookiesProvider>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider >
        </CookiesProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)