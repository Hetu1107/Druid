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
  const [a, setA] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("type") === "doctor") {
      setA(1);
    }
  }, []);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const check = () => {
    if (a) {
      return <DoctorAppointment setLoad={props.setLoad}/>;
    } else {
      return <UserAppointment setLoad={props.setLoad} />;
    }
  };
  return <div className="main-appointment">{check()}</div>;
}

export default MainAppointment;
