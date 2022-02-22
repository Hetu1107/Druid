import React, { useEffect, useState } from "react";

// Components
import DoctorAppointment from "./Doc/DoctorAppointment";
import UserAppointment from "./user/UserAppointment";

// styles
import "../../style/Appointment.scss";
import "../../style/List.scss";
import { useNavigate } from "react-router-dom";

function MainAppointment(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  
  const a = 0;
  const check = () => {
    if (a) {
      return <DoctorAppointment />;
    } else {
      return <UserAppointment setLoad={props.setLoad}/>;
    }
  };
  return <div className="main-appointment">{check()}</div>;
}

export default MainAppointment;
