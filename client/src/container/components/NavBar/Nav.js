import React, { useEffect, useState } from "react";
import "../../style/Nav.scss";
import src from "../../images/Healer.png";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import db from "../../Firebase";
import {
  Link
} from "react-router-dom";

const navItems = [
  {
    logo: "fas fa-sign-in-alt",
    name: "Login",
    link : "/login",
  },
  {
    logo: "fas fa-home",
    name: "Home",
    link: "/",
  },
  {
    logo: "fas fa-tasks",
    name: "Tasks",
    link : "/"
  },
  {
    logo: "fas fa-calendar-check",
    name: "Appointment",
    link : "/"
  },
  {
    logo: "fas fa-sign-out-alt",
    name: "Sign-Out",
    link : "/"
  },
];
function Nav(props) {
  const [user, setUser] = useState(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      // props.history.push("/");
      // Hide the sign out button and show login button
    } else {
      // Continue wherever you have redirected to
      // Hide the login Button and show sign out
      // Show Profile on top right
    }
  }, [user]);

  const responseGoogle = async (response) => {
    const profile = response.profileObj;
    const token = response.tokenId;
    localStorage.setItem("user", token);
    setUser(token);
    isRegistered(profile.email);
  };

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
        // Continue
      }
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser("");
    // Push to Home Page
    props.history.push("/");
  };

  return (
    <div className="main-nav-bar" id="main-nav-bar">
      <div className="nav-toggle" id="nav-toggle">
        <img src={src} />
      </div>
      {/* <GoogleLogin
        clientId="228410119116-q73i0va2bdvg2qnabb6msrm7d8tml87d.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      /> */}
      <div className="middle-nav">
        <div className="nav-element">
          {navItems.map((res) => {
            return (
              <Link to={res.link}>
              <div className="ele-logo">
                <i className={res.logo}></i>
                <span className="tooltiptext">{res.name}</span>
              </div>
              </Link>
            );
          })}
        </div>
        {/* <GoogleLogout
          clientId="228410119116-q73i0va2bdvg2qnabb6msrm7d8tml87d.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout> */}
      </div>
    </div>
  );
}

export default Nav;
