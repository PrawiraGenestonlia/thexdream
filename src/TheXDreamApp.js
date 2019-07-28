import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/404ErrorPage';

export default function TheXDreamApp() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/" exact component={() => { return <Redirect to='/home' /> }} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/people" exact component={ErrorPage} />
        <Route component={ErrorPage}></Route>
      </Switch>
    </Router>
  );
}
