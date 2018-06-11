import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './components/Home/home';

// HOC
import Layout from './HOC/Layout/layout';

const Routes = () => {
  return(
    < Layout >
      < Switch >
        < Route path="/" exact component={Home} />
      </ Switch >
    </ Layout >
  )
}

export default Routes;