import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home'
import ListScreen from './../pages/ListScreen/index';
import BookScreen from './../pages/BookScreen/index';

const Routes: React.FC = () => {
  return (
  <Switch>
  <Route path="/" exact component={Home} />
  <Route path="/list" exact component={ListScreen} />
  <Route path="/list/book" exact component={BookScreen} />
  </Switch>
  );
};

export default Routes;