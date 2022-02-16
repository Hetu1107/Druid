import React from "react";
import Nav from "../NavBar/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Front from "../Home/Front";

function Main() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/">
            <Front/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Main;
