import React, { useEffect, useState } from "react";
import db from "../../../Firebase";
import ListOfBooked from "./ListOfBooked";
import OnGoingPatient from "./OnGoingPatient";

function DoctorAppointment(props) {
  let setLoad = props.setLoad;
  const [Id_Booked,setBookedId] = useState([]);
  const [doctor,setDoctor] = useState("");
  const [patients, setPatients] = useState([]);
  const [token, setToken] = useState(0);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [current, setCurrent] = useState("");

// getting all booked users 
useEffect(() => {
  setLoad(1);
  db.collection("doctors").onSnapshot((snap) => {
    snap.docs.map((doc) => {
      if (doc.data().email === email) {
        db.collection("doctors")
          .doc(doc.id)
          .collection("appointments")
          .orderBy("timestamp", "asc")
          .onSnapshot((snap) => {
            setLoad(0);
            setDoctor(doc.id);
            setPatients(snap.docs.map((doc,index) => doc.data()));
            setBookedId(snap.docs.map((doc)=>doc.id));
          });
      }
    });
  });
  console.log(Id_Booked);
}, []);


  useEffect(() => {
    db.collection("doctors").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        if (doc.data().email === email) {
          setToken(doc.data().token);
        }
      });
    });
  }, []);
  const next = () => {
    let curr;
    setLoad(1);
    if(Id_Booked.length>0){
      db.collection("doctors").doc(doctor).collection("appointments").doc(Id_Booked[0]).delete();
      setLoad(0);
      console.log(doctor);
      let a = Id_Booked;
      a.splice(0,1);
      setBookedId(a);
      let b = patients;
      b.splice(0,1);
      setPatients(b);
      console.log(Id_Booked);
    }
    setLoad(0);
    // db.collection("doctors").onSnapshot((snap) => {
    //   snap.docs.map((doc) => {
    //     if (doc.data().email === email) {
    //       db.collection("doctors")
    //         .doc(doc.id)
    //         .collection("appointments")
    //         .onSnapshot((snap) => {
    //           curr = snap.docs[0].id;
    //           // window.alert(snap.docs[0].id);
    //           db.collection("doctors").onSnapshot((snap) => {
    //             snap.docs.map((doc) => {
    //               if (doc.data().email === email) {
    //                 db.collection("doctors")
    //                   .doc(doc.id)
    //                   .collection("appointments")
    //                   .doc(curr)
    //                   .delete()
    //                   .then(() => {
    //                     window.alert("Deleted");
    //                   });
    //               }
    //             });
    //           });
    //           // 
    //         });
    //     }
    //   });
    // });
  };
  return (
    <div className="appointment-box doctor">
      <div className="book-appointment">
        <OnGoingPatient setLoad={props.setLoad} patient={(patients.length>0 ? patients[0] : 0)} />
        <ListOfBooked patients={patients}/>
      </div>
      <div className="change-token">
        <h2>
          <span>Current Token No. : </span>
          {token}
        </h2>
        <button onClick={()=>next()} className="btn primary">
          Next
        </button>
      </div>
    </div>
  );
}

export default DoctorAppointment;
