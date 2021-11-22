import { ReactLocation, Router } from 'react-location'
import Header from './components/header/Header';
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin';
import Footer from './components/footer/Footer';
import NoMatch from './pages/NoMatch'

const App = () => {
  const reactLocation = new ReactLocation()

  return (
    <>
      <Header />
      <Router
        location={reactLocation}
        routes={[
          {
            path: '/',
            element: <Home />,
          },
          {
            path: 'login',
            children: [
              {
                path: '/',
                element: <AdminLogin />
              }
            ]
          },
          {
            path: '*',
            element: <NoMatch />,
          },
        ]}
      />
      <Footer />
    </>
  )
}

export default App