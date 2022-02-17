import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
// styles
import "../../style/Home.scss";
import "../../style/btn.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

// conponents
import Front from "./Front";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
function Home() {
  return (
    <div className="home">
      <Front />
      <Second />
      <Third />
      <Fourth />
    </div>
  );
}

export default withRouter(Home);
