import React from 'react';
// import Home from './components/pages/Home';
import Header from './components/navigation/Header';
// import Technology from './components/pages/Technology';
// import Destinations from './components/pages/Destinations';
// import Crew from './components/pages/Crew';
import routes from './contexts/Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
