import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from "../layout";

import Home from "../layout/pages/home"
export default function Routes(props) {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
  );
}


// <Route path="archives(/:article)" name="archives" component={Archives}></Route>
// <Route path="settings" name="settings" component={Settings}></Route>
// <Route path="seths-page" name="seths-page" component={SethsPage}></Route>
// <Route path="articles/:id" name="articles" component={ArticleDetails}></Route>
