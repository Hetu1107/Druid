import React from 'react'
import Popup from '../../Popup/Popup';
const onGoingDetail = {
  name : "Hetu Patel",
  age : "19",
  height : '6',
  blood : "B+",
  disease : "Nothing",
}
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
                  {onGoingDetail.name}
                </h2>
              </div>
              <div className="det-box">
                <h2>
                  <span>Age : </span>
                  {onGoingDetail.age}
                </h2>
              </div>
              <div className="det-box">
                <h2>
                  <span>Weigth : </span>
                  {onGoingDetail.height}
                </h2>
              </div>
              <div className="det-box but">
                <button className='btn primary' onClick={()=>{
                  document.getElementById('popup-main').style.opacity = "1";
                  document.getElementById('popup-main').style.zIndex = "10000";
                }}>Profile</button>
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
          <Popup onGoing={onGoingDetail}/>
          <div className="top">
            <h1>Detail</h1>
          </div>
          {checkUsers()}
    </div>
  )
}

export default OnGoingPatient