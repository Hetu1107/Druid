import React, { useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import db from "../Firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

function Login(props) {
  useEffect(() => {
    if (props.user.length) {
      props.history.push("/dashboard");
    }
  });

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

  return (
    <div>
      <div>
        <GoogleLogin
          clientId="228410119116-q73i0va2bdvg2qnabb6msrm7d8tml87d.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default withRouter(Login);
