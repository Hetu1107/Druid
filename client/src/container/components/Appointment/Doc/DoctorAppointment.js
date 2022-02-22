import React from "react";
import ListOfBooked from "./ListOfBooked";
import OnGoingPatient from "./OnGoingPatient";

function DoctorAppointment() {
  return (
    <div className="appointment-box doctor">
      <div className="book-appointment">
        <OnGoingPatient />
        <ListOfBooked />
      </div>
      <div className="change-token">
        <h2>
          <span>Current Token No. : </span>10
        </h2>
        <button className="btn primary">Next</button>
      </div>
    </div>
  );
}

export default DoctorAppointment;
