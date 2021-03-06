import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../../../Firebase";
import firebase from "firebase";

let PaymentDone = 1;
function BookAppointment(props) {
  let setLoad = props.setLoad;
  const [doctors, setDoctors] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(-1);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [name, setName] = useState(localStorage.getItem("name"));
  const navigate = useNavigate();
  useEffect(() => {
    setLoad(1);
    db.collection("doctors").onSnapshot((snap) => {
      setDoctors(snap.docs.map((doc) => doc.data()));
      setLoad(0);
    });
  }, []);

  const Payment = () => {
    // if (PaymentDone == 1) {
    // props.setPayment(1);
    // props.setBookedDoc(doctors[selectedDoc]);
    setLoad(1);
    let user_id;
    let user_appointment_id;
    const docName = doctors[selectedDoc].name;
    const address = doctors[selectedDoc].address;
    db.collection("users").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        if (doc.data().email === email) {
          user_id = doc.id;
          db.collection("users")
            .doc(doc.id)
            .collection("appointments")
            .add({
              doctor: docName,
              address : address
            })
            .then((ref) => {
              user_appointment_id = ref.id;
              db.collection("doctors").onSnapshot((snap) => {
                snap.docs.map((doc) => {
                  if (doc.data().name === docName) {
                    db.collection("doctors")
                      .doc(doc.id)
                      .collection("appointments")
                      .add({
                        patient: email,
                        name: name,
                        timestamp:
                          firebase.firestore.FieldValue.serverTimestamp(),
                        user_id : user_id,
                        user_appointment_id : user_appointment_id,
                      })
                      .then(() => {
                        setLoad(0);
                        props.setBookedDoc({doctor : docName,address : address});
                        // navigate("/");
                      });
                  }
                });
              });
            });
        }
      });
    });

    // }
  };

  const submit = () => {
    window.alert("submitted");
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
      <div className="list">
        <div className="top">
          <h1>List Of Doctors</h1>
        </div>
        <div className="search-bar">
          <input
            className="search"
            type="search"
            placeholder="search here..."
          />
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

export default BookAppointment;
