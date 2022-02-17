import React from 'react'
import Wave2 from "../Wave/Wave2";
import frontyoga from '../../images/Front/yoga.png';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import task from '../../images/lottie/task.json';
function Fourth() {
  return (
    <div className="second-home">
      <div className="main-front-content reverse">
        <div className="left">
          <div className="text-box">
            <h1 className="secondary">Daily Task</h1>
            <h4>
            E prescription will help the doctors such that they can directly go their patients profile and check previous dieses data of patients and also patients can maintain their prescriptions easyly.<br></br>Also it is environmenly free.
            </h4>
          </div>
          <button className="btn primary">Go to Tasks</button>
        </div>
        <div className="right">
          <Player
            autoplay
            loop
            src={task}
            style={{ height: "90%", width: "90%" }}
          ></Player>
        </div>
        <img className='front-img rev' src={frontyoga}/>
      </div>
      <Wave2 />
    </div>
  )
}

export default Fourth