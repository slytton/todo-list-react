import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import {connect} from 'react-redux';
import Layout from "../layout";

import Home from "./pages/home"
import MyLists from "./pages/my-lists"

import { fetchApi } from "../actions/apiActions"

@connect((store) => {
  return {
  };
})

export default class Routes extends React.Component{

  componentWillMount(){
    console.log("Dispatching FetchAPI: ", this.props);
    this.props.dispatch(fetchApi());
  }

  render() {
    console.log("Rendering routes");
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="/lists" name="lists" component={MyLists}></Route>
        </Route>
      </Router>
    );
  }
}


// <Route path="settings" name="settings" component={Settings}></Route>
// <Route path="seths-page" name="seths-page" component={SethsPage}></Route>
// <Route path="articles/:id" name="articles" component={ArticleDetails}></Route>
