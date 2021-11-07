import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Registration from './pages/Registration';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import NoMatch from './pages/NoMatch';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App