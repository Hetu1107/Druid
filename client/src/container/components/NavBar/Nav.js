import React, { useEffect } from "react";
import "../../style/Nav.scss";
import src from '../../images/Healer.png';

const navItems = [
  {
    logo : 'fas fa-sign-in-alt',
    name : 'Login'
  },
  {
    logo : 'fas fa-home',
    name : 'Home'
  },
  {
    logo : 'fas fa-tasks',
    name : 'Tasks'
  },
  {
    logo : 'fas fa-calendar-check',
    name : 'Appointment'
  },
  {
    logo : 'fas fa-sign-out-alt',
    name : 'Sign-Out'
  }

]
function Nav() {
  return (
    <div className="main-nav-bar" id="main-nav-bar">
      <div className="nav-toggle" id="nav-toggle">
        <img src={src}/>
      </div>
      <div className="middle-nav">
        <div className="nav-element">
          {
            navItems.map((res)=>{
              return(
                <div className="ele-logo">
                  <i className={res.logo}></i>
                  <span className="tooltiptext">{res.name}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Nav;
