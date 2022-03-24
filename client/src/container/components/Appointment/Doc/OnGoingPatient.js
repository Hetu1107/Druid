import React, { useEffect, useState } from "react";
import Popup from "../../Popup/Popup";

import db from "../../../Firebase";
import Priscription from "./Priscription";

function OnGoingPatient(props) {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [patient, setPatient] = useState(props.patient || 0);
  const [allPatient, setAll] = useState([]);
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    // console.log(props)
    setPatient(props.patient);
    // console.log(patient);
  }, [props.patient, patient]);

  useEffect(() => {
    const pat = patient.patient;
    db.collection("users").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        if (doc.data().email === pat) {
          setCurrent(doc.data());
        }
      });
    });
  }, [patient]);

  const checkUsers = () => {
    if (patient == 0) {
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
              {current.name}
            </h2>
          </div>
          <div className="det-box">
            <h2>
              <span>Age : </span>
              {current.age}
            </h2>
          </div>
          <div className="det-box">
            <h2>
              <span>Weigtht : </span>
              {current.weight}
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
            <button
              className="btn secondary"
              onClick={() => {
                document.getElementById("main-prescription").style.opacity =
                  "1";
                document.getElementById("main-prescription").style.zIndex =
                  "1000";
              }}
            >
              Prescription
            </button>
          </div>
        </div>
      );
    }
  };
  const NullorNot = () => {
    if (patient != 0) {
      return (
        <div className="deatil-of-doc">
          <Priscription
            detail={{
              docname: localStorage.getItem("name"),
              patientName: patient.name,
              patientEmail: patient.patient,
              mobile: patient.number,
              age: patient.age,
              precription: [],
            }}
            setLoad={props.setLoad}
          />
          <Popup onGoing={current} />
          <div className="top">
            <h1>Detail</h1>
          </div>
          {checkUsers()}
        </div>
      );
    } else {
      return (
        <div className="deatil-of-doc">
          <div className="top">
            <h1>Detail</h1>
          </div>
          {checkUsers()}
        </div>
      );
    }
  };
  return <>{NullorNot()}</>;
}

export default OnGoingPatient;
