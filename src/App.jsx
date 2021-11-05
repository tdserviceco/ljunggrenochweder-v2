import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import NoMatch from './pages/Home';

const App = () => {
  useEffect(() => {
    document.title = 'L.I.S.A | Lindab'
  }, [])
  return (
    <Router>
      <Gdpr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NoMatch} />
      </Switch>
      < WizardCreateNewProject />
      <Footer />
    </Router>
  )
};

export default App;