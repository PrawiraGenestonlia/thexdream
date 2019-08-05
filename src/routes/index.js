import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

//page
import Landing from './page/landing';
import Error404 from './page/error-404';
import ComingSoon from './page/coming-soon';

//apps
import Main from './apps/main';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/page/coming-soon" />
        {/*  */}
        {/* <Route exact path="/index.html" component={ComingSoon} /> */}
        {/*  */}
        <Route exact path="/page/landing" component={Landing} />
        <Route exact path="/page/error-404" component={Error404} />
        <Route exact path="/page/coming-soon" component={ComingSoon} />
        {/*  */}
        <Route exact path="/apps/main" component={Main} />
        {/*  */}
        <Redirect to="/page/error-404" />
      </Switch>
    </Router>
  );
}