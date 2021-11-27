import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin';
import Register from './pages/Registration';
import Footer from './components/footer/Footer';
import NoMatch from './pages/NoMatch'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App