import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";
import Person from "./Person";

// style
import "../../style/User.scss";
import "../../style/textbox.scss";
import { useNavigate } from "react-router-dom";

let about = "patient";
function User(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));
  useEffect(() => {
    about = localStorage.getItem('type');
    console.log(about);
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  
  function checkUser() {
    about = localStorage.getItem('type');
    console.log(about);
    if (!user) {
      navigate("/login");
      return <></>;
    }
    if (about === "doctor") {
      return <Doctor setLoad = {props.setLoad}/>;
    } else {
      return <Person setLoad = {props.setLoad}/>;
    }
  }
  return <div className="main-user-profile">{checkUser()}</div>;
}

export default User;
