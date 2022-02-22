import React, { useState } from "react";
import BookAppointment from "./BookAppointment";
import BookedUser from "./BookedUser";

function UserAppointment(props) {
  const [payment, setPayment] = useState(0);
  const [BookesDoctor, setBookedDoc] = useState({});

  // if 1 means if user has already booked one appointment then
  const checkStatusOfAppointment = () => {
    if (0) {
      return <BookedUser />;
    } else {
      return (
        <BookAppointment setPayment={setPayment} setBookedDoc={setBookedDoc} setLoad={props.setLoad}/>
      );
    }
  };
  return <div className="appointment-box">{checkStatusOfAppointment()}</div>;
}

export default UserAppointment;
