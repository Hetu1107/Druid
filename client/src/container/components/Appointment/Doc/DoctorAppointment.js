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
  }, []);
  const next = async () => {
    let curr;
    await new Promise((resolve, rejext) => {
      db.collection("doctors").onSnapshot((snap) => {
        snap.docs.map((doc) => {
          if (doc.data().email === email) {
            db.collection("doctors")
              .doc(doc.id)
              .collection("appointments")
              .onSnapshot((snap) => {
                curr = snap.docs[0].id;
                window.alert(snap.docs[0].id);
                db.collection("doctors").onSnapshot((snap) => {
                  snap.docs.map((doc) => {
                    if (doc.data().email === email) {
                      db.collection("doctors")
                        .doc(doc.id)
                        .collection("appointments")
                        .doc(curr)
                        .delete()
                        .then(() => {
                          window.alert("Deleted");
                        });
                    }
                  });
                });
                resolve(true);
              });
          }
        });
      });
      resolve(true);
    });
  };
  return (
    <div className="appointment-box doctor">
      <div className="book-appointment">
        <OnGoingPatient setLoad={props.setLoad} />
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
