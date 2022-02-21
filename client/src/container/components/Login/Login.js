import React, { useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import db from "../../Firebase";
import "../../style/Register.scss";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import login from "../../images/lottie/login.json";
import yoga from "../../images/lottie/Yoga2.json";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

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
        navigate("/register");
      } else {
        navigate("/");
        // Push to Home page
      }
    });
  };

  const responseGoogle = async (response) => {
    const profile = response.profileObj;
    const token = response.tokenId;
    console.log(profile);
    localStorage.setItem("user", token);
    localStorage.setItem("email", profile.email);
    localStorage.setItem("image", profile.imageUrl);
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
              clientId="228410119116-q73i0va2bdvg2qnabb6msrm7d8tml87d.apps.googleusercontent.com"
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
