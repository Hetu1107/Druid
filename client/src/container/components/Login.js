import React, { useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

export default function Login() {
  const responseGoogle = (response) => {
    const profile = response.profileObj;
    const token = response.tokenId;
    console.log(profile);
    localStorage.setItem("user", token);
  };

  useEffect(() => {});

  const logout = () => {
    localStorage.removeItem("user");
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
      <div>
        <GoogleLogout></GoogleLogout>
      </div>
    </div>
  );
}
