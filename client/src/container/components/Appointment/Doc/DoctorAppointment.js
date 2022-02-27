import React, { useEffect, useState } from "react";
import db from "../../../Firebase";
import ListOfBooked from "./ListOfBooked";
import OnGoingPatient from "./OnGoingPatient";

function DoctorAppointment(props) {
  const [token, setToken] = useState(0);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [current, setCurrent] = useState("");

  useEffect(() => {
    db.collection("doctors").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        if (doc.data().email === email) {
          setToken(doc.data().token);
        }
      });
    });
  });
  const next = () => {};
  return (
    <div className="appointment-box doctor">
      <div className="book-appointment">
        <OnGoingPatient setLoad={props.setLoad}/>
        <ListOfBooked />
      </div>
      <div className="change-token">
        <h2>
          <span>Current Token No. : </span>
          {token}
        </h2>
        <button onClick={next} className="btn primary">
          Next
        </button>
      </div>
    </div>
  );
}

export default DoctorAppointment;
