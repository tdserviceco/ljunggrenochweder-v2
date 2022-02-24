import React from 'react';
import ReactDOM from 'react-dom';

//Redux 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from './Redux/reducers';
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//React Router V6
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Routes for Router V6
import {
  Login,
  Register,
  Home,
  Header,
  Footer
} from './Components';

import {
  App,
  NoMatch
} from './Pages'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
