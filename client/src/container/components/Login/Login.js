import React, { useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import db from "../../Firebase";
import "../../style/Register.scss";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import login from "../../images/lottie/login.json";
import yoga from "../../images/lottie/Yoga2.json";
import { useNavigate } from "react-router-dom";

// import { auth, provider} from "../../Firebase"; 



function Login() {
  const navigate = useNavigate();

  const isRegistered = (email) => {
    let flag = 0;
    let count = 0;
    db.collection("users").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        if (doc.data().email === email) {
          localStorage.setItem("type", "patient");
          flag = 1;
        }
      });
      if (flag == 0) {
        // Push to registration page
        console.log("hello");
        navigate("/register");
        localStorage.setItem("type", "patient");
      } else {
        navigate("/");
        // Push to Home page
      }
    });
    db.collection("doctors").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        if (doc.data().email === email) {
          localStorage.setItem("type", "doctor");
          flag = 1;
        }
      });
      if (flag == 0) {
        // Push to registration page
        localStorage.setItem("type", "patient");
        navigate("/register");
      } else {
        navigate("/");
        // Push to Home page
      }
    });
    db.collection("admin").onSnapshot((snap)=>{
      snap.docs.map((doc)=>{
        if(doc.data().email === email){
          localStorage.setItem("type","admin");
          localStorage.setItem("taskgiven",doc.data().given);
          navigate("/admin");
        }
      })
    });
    // if(count>0){
    //   console.log(count);
    //   if (flag == 0) {
    //     // Push to registration page
    //     console.log("hello");
    //     navigate("/register");
    //     localStorage.setItem("type", "patient");
    //   } else {
    //     navigate("/");
    //     // Push to Home page
    //   }
    // }
  };

  const responseGoogle = async (response) => {
    const profile = await response.profileObj;
    const token = await response.tokenId;
    console.log(response);
    localStorage.setItem("user", token);
    localStorage.setItem("email", profile.email);
    localStorage.setItem("image", profile.imageUrl);
    localStorage.setItem("name", profile.name);
    isRegistered(profile.email);
  };
  return (
    <div className="main-login-page">
      <div className="login-box">
        <div className="left">
          <Player
            autoplay
            loop
            src={login}
            style={{ height: "90%", width: "90%" }}
          ></Player>
        </div>
        <div className="right">
          <h2>DRUID</h2>
          <Player
            autoplay
            loop
            src={yoga}
            style={{ height: "90%", width: "90%", marginTop: 0 }}
          ></Player>
          <div className="google">
            <GoogleLogin
              clientId="678856842896-l32g0blo9ig6svifljhjjbg7kqtlmmhv.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className="google-login"
            />
            <h3>Join Us Today!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
