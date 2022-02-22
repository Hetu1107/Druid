import React from 'react'

function OnGoingPatient() {
    const checkUsers = ()=>{
        if(0){
          return (
            <div className="detail-box">
              <h3>Sorry the booking are empty</h3>
            </div>
          );
        }
        else{
          return(
          <div className="detail-box">
              <div className="det-box">
                <h2>
                  <span>Name : </span>
                  Patient Name
                </h2>
              </div>
              <div className="det-box">
                <h2>
                  <span>Age : </span>
                  19
                </h2>
              </div>
              <div className="det-box">
                <h2>
                  <span>Weigth : </span>
                  40
                </h2>
              </div>
              <div className="det-box but">
                <button className="btn secondary">
                  Prescription
                </button>
              </div>
            </div>
          )
        }
      }
  return (
    <div className="deatil-of-doc">
          <div className="top">
            <h1>Detail</h1>
          </div>
          {checkUsers()}
    </div>
  )
}

export default OnGoingPatient