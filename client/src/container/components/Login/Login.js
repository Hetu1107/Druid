import React, { useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import db from "../../Firebase";
import "../../style/Register.scss";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import login from "../../images/lottie/login.json";
import yoga from "../../images/lottie/Yoga2.json";
function Login(props) {
  // useEffect(() => {
  //   if (props.user.length) {
  //     props.history.push("/");
  //     // Hide the login button
  //   }
  // });

  const isRegistered = async (email) => {
    let flag = 0;
    await new Promise((resolve, reject) => {
      db.collection("users").onSnapshot((snap) => {
        snap.docs.map((doc) => {
          if (doc.data().email === email) {
            resolve(true);
            flag = 1;
          }
        });
        resolve(true);
      });
    }).then(() => {
      if (flag == 0) {
        // Push to registration page
        props.history.push("/register");
      } else {
        props.history.push("/dashboard");
        // Push to Dashboard
      }
    });
  };

  const responseGoogle = async (response) => {
    const profile = response.profileObj;
    const token = response.tokenId;
    console.log(profile);
    localStorage.setItem("user", token);
    isRegistered(profile.email);
  };
  /* google login */
  // <GoogleLogin
  //   clientId="228410119116-q73i0va2bdvg2qnabb6msrm7d8tml87d.apps.googleusercontent.com"
  //   buttonText="Login"
  //   onSuccess={responseGoogle}
  //   onFailure={responseGoogle}
  //   cookiePolicy={"single_host_origin"}
  // />
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
            style={{ height: "80%", width: "80%", marginTop: 0 }}
          ></Player>
          <div className="google">
            <GoogleLogin
              clientId="228410119116-q73i0va2bdvg2qnabb6msrm7d8tml87d.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              className = "google-login"
            />
            <h3>Join Us Today!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
