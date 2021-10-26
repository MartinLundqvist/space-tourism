import React from 'react';
import Home from './components/pages/Home';
import Header from './components/navigation/Header';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
};

export default App;
