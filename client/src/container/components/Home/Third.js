import React from 'react'
import Wave from '../Wave/Wave';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import pres from '../../images/lottie/pres.json';
function Third() {
  return (
    <div className="second-home">
      <div className="main-front-content">
        <div className="left">
          <div className="text-box">
            <h1 className="primary">Offline Appointments</h1>
            <h4>
            E prescription will help the doctors such that they can directly go their patients profile and check previous dieses data of patients and also patients can maintain their prescriptions easyly.<br></br>Also it is environmenly free.
            </h4>
          </div>
          <button className="btn secondary">Go to Profile</button>
        </div>
        <div className="right">
          <Player
            autoplay
            loop
            src={pres}
            style={{ height: "90%", width: "90%" }}
          ></Player>
        </div>
      </div>
      <Wave />
    </div>
  )
}

export default Third