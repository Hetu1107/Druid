import React, { useEffect, useState } from "react";
import "../../style/Nav.scss";
import src from "../../images/Healer.png";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import db from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  {
    logo: "fas fa-sign-in-alt",
    name: "Login",
    link: "/login",
  },
  {
    logo: "fas fa-home",
    name: "Home",
    link: "/",
  },
  {
    logo: "fas fa-tasks",
    name: "Tasks",
    link: "/tasks",
  },
  {
    logo: "fas fa-calendar-check",
    name: "Appointment",
    link: "/",
  },
  {
    logo: "fas fa-sign-out-alt",
    name: "Sign-Out",
    link: "/",
  },
];
function Nav(props) {
  const logout = () => {
    localStorage.removeItem("user");
    // Push to Home Page
  };

  return (
    <div className="main-nav-bar" id="main-nav-bar">
      <div className="nav-toggle" id="nav-toggle">
        <img src={src} />
      </div>
      <div className="middle-nav">
        <div className="nav-element">
          {navItems.map((res) => {
            return (
              <Link to={res.link}>
                {res.name == "Sign-Out" ? (
                  <div onClick={logout} className="ele-logo">
                    <i className={res.logo}></i>
                    <span className="tooltiptext">{res.name}</span>
                  </div>
                ) : (
                  <div className="ele-logo">
                    <i className={res.logo}></i>
                    <span className="tooltiptext">{res.name}</span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Nav;
