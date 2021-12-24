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

import { Home, Register, PageNotFound, Login } from './containers';
import { Header, Footer } from './components';
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ApolloProvider>
  );
};

export default App;