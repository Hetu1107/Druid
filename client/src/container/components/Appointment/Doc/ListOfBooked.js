import React, { useEffect, useState } from "react";
import db from "../../../Firebase";

function ListOfBooked(props) {
  const [patients, setPatients] = useState(props.patients);
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
        {patients.length > 0 &&
          patients.map((patient) => {
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
