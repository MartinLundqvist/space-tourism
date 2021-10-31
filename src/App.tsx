import React from 'react';
import Header from './components/navigation/Header';
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
