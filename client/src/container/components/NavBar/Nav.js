import React, { useEffect, useState } from "react";
import "../../style/Nav.scss";
import src from "../../images/Healer.svg";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import db from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  // {
  //   logo: "fas fa-sign-in-alt",
  //   name: "Login",
  //   link: "/login",
  // },
  {
    logo: "fas fa-user-circle",
    name: "Profile",
    link: "/user",
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
    link: "/appointment",
  },
  {
    logo: "fas fa-history",
    name: "History",
    link: "/history",
  },
  // {
  //   logo: "fas fa-sign-out-alt",
  //   name: "Sign-Out",
  //   link: "/",
  // },
];
function Nav(props) {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [navBar, setNavBar] = useState([]);
  useEffect(() => {
    settingNav();
  }, []);
  const settingNav = () => {
    const logout = {
      logo: "fas fa-sign-out-alt",
      name: "Sign-Out",
      link: "/",
    };
    const login = {
      logo: "fas fa-sign-in-alt",
      name: "Login",
      link: "/login",
    };
    if (localStorage.getItem("email") != null) {
      navItems.push(logout);
      if (navItems.length > 6) {
        navItems.shift();
      }
    } else {
      navItems.unshift(login);
      if (navItems.length > 6) {
        navItems.pop();
      }
    }
    setNavBar(navItems);
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("type");
    console.log("HEtu");
    // Push to Home Page
  };
  return (
    <div className="main-nav-bar" id="main-nav-bar">
      <div
        className="bar"
        id="bar"
        onClick={() => {
          let check = document
            .getElementById("bar")
            .classList.contains("cross");
          console.log(check);
          if (check) {
            document.getElementById("bar").classList.remove("cross");
            document.getElementById("main-nav-bar").style.left = "-100px";
          } else {
            document.getElementById("bar").classList.add("cross");
            document.getElementById("main-nav-bar").style.left = "0.5vw";
          }
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav-toggle" id="nav-toggle">
        <img src={src} />
      </div>
      <div className="middle-nav">
        <div className="nav-element">
          {navBar.map((res) => {
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
