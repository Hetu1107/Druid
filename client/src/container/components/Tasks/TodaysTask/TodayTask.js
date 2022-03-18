import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import * as tmPose from "@teachablemachine/pose";
import * as posenet from "@tensorflow-models/posenet";
import { drawSkeleton, drawKeypoints } from "./utils";
function TodayTask() {
  const [task,setTask] = useState('Sukhasan');
  let [completed, setCompleted] = useState(false);
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const webCamRef = useRef(null);
  const canvaRef = useRef(null);
  let model, webcam, ctx, labelContainer, maxPredictions;
  async function init() {
    const modelURL =
      "https://teachablemachine.withgoogle.com/models/rMbX7zRAb/model.json";
    const metadataURL =
      "https://teachablemachine.withgoogle.com/models/rMbX7zRAb/metadata.json";

    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const w = webCamRef.current.video.videoWidth;
    const h = webCamRef.current.video.videoHeight;
    const flip = false; // whether to flip the webcam
    webcam = new tmPose.Webcam(w, h, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);
  }
  async function loop(timestamp) {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.6, ctx);
    drawSkeleton(pose["keypoints"], 0.7, ctx);
  };
  async function predict() {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);

    const prediction = await model.predict(posenetOutput);
    console.log(prediction);
    if(prediction[0].probability<0.5){
      setIsActive(false);
      document.getElementById("timer").classList.remove("green");
      document.getElementById("timer").classList.add("red");
    }
    else{
      setIsActive(true);
      document.getElementById("timer").classList.add("green");
      document.getElementById("timer").classList.remove("red");
    }
    if (
      typeof webCamRef.current !== "undefined" &&
      webCamRef.current !== null &&
      webCamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webCamRef.current.video;
      const videoWidth = webCamRef.current.video.videoWidth;
      const videoHeight = webCamRef.current.video.videoHeight;

      // Set video width
      webCamRef.current.video.width = videoWidth;
      webCamRef.current.video.height = videoHeight;

      drawCanvas(pose, video, videoWidth, videoHeight, canvaRef);
    }
  }

  useEffect(()=>{
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000)
    }
    return () => clearInterval(intervalId);
  },[isActive, counter]);
  const startTask = () => {
    init();
    setIsActive(true);
  };
  function checkingTaskDetail() {
    if (completed) {
      return (
        <div className="completed-task">
          <h3>Hey You have finished you daily task</h3>
        </div>
      );
    } else {
      return (
        <>
          <div className="task-details">
            <div className="about-task">
              <h4>
                Task : <span className="secondary">{task}</span>
              </h4>
              <h4>
                Timer : <span className="green" id="timer">{minute}:{second}</span>
              </h4>
            </div>
            <div className="start-task">
              <button className="btn primary" onClick={startTask}>
                Start Task
              </button>
            </div>
          </div>
          <div className="camera-box">
            <Webcam ref={webCamRef} className="webcam" />
            <canvas ref={canvaRef} className="canvas" />
          </div>
        </>
      );
    }
  }
  return (
    <div className="todays-task">
      <div className="history-main-box">
        <div className="main-detail-box">{checkingTaskDetail()}</div>
      </div>
    </div>
  );
}

export default TodayTask;
