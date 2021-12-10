import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import Register from './pages/Registration';
import Footer from './components/footer/Footer';
import CreateService from "./pages/CreateService";
import Demo from './pages/Demo';
import NoMatch from './pages/NoMatch'
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/create/service" element={<CreateService />} />
          <Route path="/register" element={<Register />} />
          <Route path="/calender" element={<Demo />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App