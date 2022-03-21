import React, { useState } from "react";
import db from "../../../Firebase";
import BookAppointment from "./BookAppointment";
import BookedUser from "./BookedUser";

function UserAppointment(props) {
  const [payment, setPayment] = useState(0);
  const [BookedDoctor, setBookedDoc] = useState(null);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  // if 1 means if user has already booked one appointment then
  const checkStatusOfAppointment = () => {
    db.collection("users").onSnapshot((snap)=>{
      snap.docs.map(async(doc)=>{
        if (doc.data().email === email) {
         db.collection("users")
            .doc(doc.id)
            .collection("appointments").onSnapshot((snap)=>{
              setBookedDoc(snap.docs[0].data())
            })
        }
      })
    })
    if (BookedDoctor!=null) {
      return <BookedUser details={BookedDoctor}/>
    } else {
      return (
        <BookAppointment setPayment={setPayment} setBookedDoc={setBookedDoc} setLoad={props.setLoad}/>
      );
    }
  };
  return <div className="appointment-box">{checkStatusOfAppointment()}</div>;
}

export default UserAppointment;
