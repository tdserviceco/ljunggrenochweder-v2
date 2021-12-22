import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './components/errors/PageNotFound';

/** Apollo setup */
//Error link handler
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: `${import.meta.env.VITE_APP_DOMAIN}/graphql` })
])


const client = new ApolloClient({
  cache: new InMemoryCache,
  link: link
})

/**Apollo setup ends here */

const App = () => {
  const DisplayHeader = () => {
    const url = window.location.pathname
    if (url !== '/login') {
      return <Header />
    }
  }
  return (
    <ApolloProvider client={client}>
      {DisplayHeader()}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/create/service" element={<CreateService />} />
          <Route path="/demo" element={<Demo />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ApolloProvider>
  );
};

export default App;