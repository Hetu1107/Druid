import React from "react";
import Nav from "../NavBar/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

function Main() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default Main;
