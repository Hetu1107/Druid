import React, { useState, useEffect } from "react";
import db from "../../Firebase";
function DocHistory(props) {
  const setLoad = props.setLoad;
  const [history, setHistory] = useState([]);
  // history is empty or not
  useEffect(() => {
    setLoad(1);
    db.collection("doctors").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        if (doc.data().email === localStorage.getItem("email")) {
          db.collection("doctors")
            .doc(doc.id)
            .collection("prescription")
            .onSnapshot((snap) => {
              let a = history;
              snap.docs.map((doc) => a.push(doc.data()));
              setHistory(a);
              setLoad(0);
            });
          console.log(doc.data());
        }
      });
    });
  }, []);
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
                <h4>{res.patient}</h4>
              </div>
              <div className="col 3">
                <h4>{res.time}</h4>
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
            <h4>Patient Name</h4>
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

export default DocHistory;
