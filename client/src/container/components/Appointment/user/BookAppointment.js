import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../../../Firebase";

let PaymentDone = 1;
function BookAppointment(props) {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(-1);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const navigate = useNavigate();
  useEffect(() => {
    db.collection("doctors").onSnapshot((snap) => {
      setDoctors(snap.docs.map((doc) => doc.data()));
    });
    // console.log(doctors);
  });

  const Payment = () => {
    if (PaymentDone == 1) {
      props.setPayment(1);
      // props.setBookedDoc(doctors[selectedDoc]);
      const docName = doctors[selectedDoc].name;
      db.collection("users").onSnapshot((snap) => {
        snap.docs.map((doc) => {
          if (doc.data().email === email) {
            db.collection("users").doc(doc.id).collection("appointments").add({
              doctor: docName,
            });
          }
        });
      });

      db.collection("doctors").onSnapshot((snap) => {
        snap.docs.map((doc) => {
          if (doc.data().name === docName) {
            db.collection("doctors")
              .doc(doc.id)
              .collection("appointments")
              .add({
                patient: email,
              })
              .then(() => {
                navigate("/");
              });
          }
        });
      });
    }
  };
  const NullorNot = () => {
    if (selectedDoc == -1) {
      return (
        <div className="detail-box">
          <h3>Nothing is selected</h3>
        </div>
      );
    } else {
      return (
        <div className="detail-box">
          <div className="det-box">
            <h2>
              <span>Name : </span>
              {doctors[selectedDoc].name}
            </h2>
          </div>
          <div className="det-box">
            <h2>
              <span>Degree : </span>
              {doctors[selectedDoc].degree}
            </h2>
          </div>
          <div className="det-box">
            <h2>
              <span>Address : </span>
              {doctors[selectedDoc].address}
            </h2>
          </div>
          <div className="det-box but">
            <button className="btn secondary" onClick={Payment}>
              Book Now
            </button>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="book-appointment">
      <div className="list-of-doc">
        <div className="top">
          <h1>List Of Doctors</h1>
        </div>
        <div className="search-bar">
          <input className="search" type="search" />
        </div>
        <div className="search-results">
          {doctors.map((res, index) => {
            return (
              <div
                className="item"
                id={`item{index}`}
                onClick={(e) => {
                  setSelectedDoc(index);
                }}
              >
                <div className="left">
                  <h2>{res.name}</h2>
                </div>
                <div className="right">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="deatil-of-doc">
        <div className="top">
          <h1>Detail</h1>
        </div>
        {NullorNot()}
      </div>
    </div>
  );
}

{
  /* <div className="item">
            <div className="left">
              <h2>Name</h2>
            </div>
            <div className="right">
              <i class="fas fa-angle-right"></i>
            </div>
          </div> */
}
export default BookAppointment;
