import React from "react";
import Wave from "../Wave/Wave";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import yoga from "../../images/lottie/Yoga.json";
function Front() {
  return (
    <div className="main-front-page">
      <div className="main-front-content">
        <div className="left">
          <div className="text-box">
            <h1 className="primary">Enjoy Your Life With Good Health</h1>
          </div>
          <button className="btn secondary">Explore</button>
        </div>
        <div className="right">
          <Player
            autoplay
            loop
            src={yoga}
            style={{ height: "90%", width: "90%" }}
          ></Player>
        </div>
      </div>
      <div className="main-round"></div>
      <div className="main-round"></div>
      <div className="main-round"></div>
      <div className="main-round"></div>
      <Wave />
    </div>
  );
}

export default Front;
