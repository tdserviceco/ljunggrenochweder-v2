import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Booking, UserPage, Structure, HTMLErrorCodes } from './Pages';
import { Header, Footer } from './Components';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="*" element={<Navigate to="404" />} />
        <Route path="/404" element={<HTMLErrorCodes status={404} />} />
        <Route path="/403" element={<HTMLErrorCodes status={403} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;