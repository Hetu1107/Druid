import React from "react";
import Nav from "../NavBar/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "../Home/Home";

function Main(props) {
  return (
    <>
      <Nav user={props.user} />
      <Home />
    </>
  );
}

export default withRouter(Main);
