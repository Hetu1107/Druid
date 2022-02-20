import React, { useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
// styles
import "../../style/Home.scss";
import "../../style/btn.scss";

// conponents
import Front from "./Front";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
function Home(props) {
  return (
    <div className="home">
      <Front />
      <Second />
      <Third />
      <Fourth />
    </div>
  );
}

export default Home;
