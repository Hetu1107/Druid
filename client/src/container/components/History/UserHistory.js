import React, { useEffect, useState } from "react";
import db from '../../Firebase';
import firebase from "firebase";
const user_his = [
  {
    name: "Hetu Patel",
    date: "10-10-10",
    url: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Naitik Patil",
    date: "11-10-10",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    name: "Zaid Bhimala",
    date: "12-10-10",
    url: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Roop Lala",
    date: "13-10-10",
    url: "http://www.africau.edu/images/default/sample.pdf",
  },
];
function UserHistory(props) {
  const setLoad = props.setLoad;
  const [history,setHistory] = useState([]);
  // history is empty or not 
  useEffect(()=>{
    setLoad(1);
    db.collection("users").onSnapshot((snap)=>{
      snap.docs.map((doc)=>{
        if(doc.data().email===localStorage.getItem("email")){
          db.collection("users").doc(doc.id).collection("")
        }
      })
    })
  },[])
  const empty_or_not = () => {
    if (history.length == 0) {
      return (
        <div className="empty">
          <h4>Nothing Here...</h4>
        </div>
      );
    } else {
      return history.map((res, index) => {
        return (
          <>
            <div className="line"></div>
            <div className="row">
              <div className="col 1">
                <h4>{index + 1}</h4>
              </div>
              <div className="col 2">
                <h4>{res.name}</h4>
              </div>
              <div className="col 3">
                <h4>{res.date}</h4>
              </div>
              <div className="col 4">
                <h4
                  className="view"
                  onClick={() => {
                    document.getElementById(
                      `object-area-${index}`
                    ).style.opacity = 1;
                    document.getElementById(
                      `object-area-${index}`
                    ).style.zIndex = 10000;
                  }}
                >
                  view
                </h4>
              </div>
            </div>
          </>
        );
      });
    }
  };

  // all the pdf box 
  const pdf_call = (e) => {
    return history.map((res, index) => {
      return (
        <div className="object-area" id={`object-area-${index}`}>
          <i
            class="fas fa-times"
            onClick={() => {
              document.getElementById(`object-area-${index}`).style.opacity = 0;
              document.getElementById(`object-area-${index}`).style.zIndex = -1;
            }}
          ></i>
          <object data={res.url} type="application/pdf" className="pdf">
            <a href={res.url} target="_blank">
              view
            </a>
          </object>
        </div>
      );
    });
  };
  return (
    <div className="history-main">
      {pdf_call()}
      <div className="history-main-box">
        <div className="row head">
          <div className="col 1">
            <h4>No.</h4>
          </div>
          <div className="col 2">
            <h4>Doctor Name</h4>
          </div>
          <div className="col 3">
            <h4>Date</h4>
          </div>
          <div className="col 4">
            <h4>Priscription</h4>
          </div>
        </div>
        {empty_or_not()}
      </div>
    </div>
  );
}

export default UserHistory;
