import React, { useEffect, useState } from "react";
import Popup from "../../Popup/Popup";

import db from "../../../Firebase";

function OnGoingPatient() {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [patient, setPatient] = useState([]);
  useEffect(() => {
    db.collection("doctors").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        if (doc.data().email === email) {
          const patientEmail = doc.data().current;
          db.collection("users").onSnapshot((snap) => {
            snap.docs.map((doc) => {
              if (doc.data().email === patientEmail) {
                setPatient(doc.data());
              }
            });
          });
        }
      });
    });
  });
  const checkUsers = () => {
    if (0) {
      return (
        <div className="detail-box">
          <h3>Sorry the booking are empty</h3>
        </div>
      );
    } else {
      return (
        <div className="detail-box">
          <div className="det-box">
            <h2>
              <span>Name : </span>
              {patient.name}
            </h2>
          </div>
          <div className="det-box">
            <h2>
              <span>Age : </span>
              {patient.age}
            </h2>
          </div>
          <div className="det-box">
            <h2>
              <span>Weigth : </span>
              {patient.height}
            </h2>
          </div>
          <div className="det-box but">
            <button
              className="btn primary"
              onClick={() => {
                document.getElementById("popup-main").style.opacity = "1";
                document.getElementById("popup-main").style.zIndex = "10000";
              }}
            >
              Profile
            </button>
            <button className="btn secondary">Prescription</button>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="deatil-of-doc">
      <Popup onGoing={patient} />
      <div className="top">
        <h1>Detail</h1>
      </div>
      {checkUsers()}
    </div>
  );
}

export default OnGoingPatient;
