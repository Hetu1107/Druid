import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";
import Person from "./Person";

// style
import "../../style/User.scss";
import "../../style/textbox.scss";
import { useNavigate } from "react-router-dom";

let about = 0;
function User() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  
  function checkUser() {
    if (about) {
      return <Doctor />;
    } else {
      return <Person />;
    }
  }
  return <div className="main-user-profile">{checkUser()}</div>;
}

export default User;
