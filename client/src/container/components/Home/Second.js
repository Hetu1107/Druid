import React from "react";
import Wave2 from "../Wave/Wave2";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Doc from "../../images/lottie/Doc.json";
function Second() {
  return (
    <div className="second-home">
      <div className="main-front-content reverse">
        <div className="left">
          <div className="text-box">
            <h1 className="secondary">Offline Appointments</h1>
            <h4>
              For offline consultation we have to wait until the our number
              comes.<br></br> We provide online advance booking for offline consaltation
              you just need to select hospital and pay the fees and fix your
              appointment. You can show the predicted time when your number can
              come so that you can go there accordingly. By which your time will
              also save.
            </h4>
          </div>
        </div>
        <div className="right">
          <Player
            autoplay
            loop
            src={Doc}
            style={{ height: "90%", width: "90%" }}
          ></Player>
        </div>
      </div>
      <Wave2 />
    </div>
  );
}

export default Second;
