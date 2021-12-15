import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './components/errors/PageNotFound';
const App = () => {
  const DisplayHeader = () => {
    const url = window.location.pathname
    if (url !== '/login') {
      return <Header />
    }
  }
  return (
    <>
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
    </>
  );
};

export default App;