import React, { useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import db from "../../Firebase";

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
    <div>
      <h1>Hey</h1>
    </div>
  );
}

export default Login;
