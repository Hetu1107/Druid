import React, { useEffect, useState } from "react";
import db from "../../../Firebase";

function ListOfBooked(props) {
  const [patients, setPatients] = useState(props.patients);
  // const [email, setEmail] = useState(localStorage.getItem("email"));
  // useEffect(() => {
  //   db.collection("doctors").onSnapshot((snap) => {
  //     snap.docs.map((doc) => {
  //       if (doc.data().email === email) {
  //         db.collection("doctors")
  //           .doc(doc.id)
  //           .collection("appointments")
  //           .orderBy("timestamp", "asc")
  //           .onSnapshot((snap) => {
  //             setDoctor(doc.id);
  //             setPatients(snap.docs.map((doc,index) => doc.data()));
  //             setBookedId(snap.docs.map((doc)=>doc.id));
  //           });
  //       }
  //     });
  //   });
  //   console.log(doctor);
  // }, []);
  useEffect(() => {
    setPatients(props.patients);
  }, [props.patients]);
  return (
    <div className="list">
      <div className="top">
        <h1>List Of Patients</h1>
      </div>
      <div className="search-bar">
        <input className="search" type="search" placeholder="search here..." />
      </div>
      <div className="search-results">
        {patients.length>0 && patients.map((patient) => {
          return (
            <div className="item">
              <div className="left">
                <h2>{patient.name} </h2>
              </div>
              <div className="right">
                <i class="fas fa-angle-left"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListOfBooked;
