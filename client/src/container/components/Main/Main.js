import React from "react";
import Nav from "../NavBar/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "../Home/Home";

function Main() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Main;
