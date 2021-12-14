import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageNotFound from './components/errors/PageNotFound';
import Home from './pages/Home'
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/login" element={<AdminLogin />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/create/service" element={<CreateService />} />
          <Route path="/register" element={<Register />} />
          <Route path="/demo" element={<Demo />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;