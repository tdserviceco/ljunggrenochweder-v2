import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Booking, Structure, HTMLErrorCodes } from './containers';
import { Header, Footer } from './components';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<HTMLErrorCodes status={404} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;