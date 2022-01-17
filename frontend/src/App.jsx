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

import { Home, Register, Structure, HTMLErrorCodes, Booking } from './containers';

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
  return (
    <ApolloProvider client={client}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<HTMLErrorCodes status={404} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ApolloProvider>
  );
};

export default App;