import React, { useEffect } from 'react'
import '../../style/Popup.scss'
function Popup(props) {

// times is the we search user in doc detail how many times he visited 
const times = 2;

// url is last visits priscription
let url = "http://localhost:3000";


// ongoin details 
let onGoing = props.onGoing;

useEffect((props)=>{
    if(times>0){
        url = "http://localhost:3000/";
    }
},[]);

  return (
    <div className='popup-main' id='popup-main'>
        <div className='popup-box'>
            <div className='top-popup'>
                <h3>Profile</h3>
                <i class="fas fa-times" onClick={()=>{
                    document.getElementById('popup-main').style.zIndex = "-1";
                    document.getElementById('popup-main').style.opacity = "0";
                }}></i>
            </div>
            <div className='detail-box-popup'>
                <div>
                    <h3><span>Name : </span>{onGoing.name}</h3>
                </div>
                <div>
                    <h3><span>Age : </span>{onGoing.age}</h3>
                </div>
                <div>
                    <h3><span>Blood Group : </span>{onGoing.blood}</h3>
                </div>
                <div>
                    <h3><span>Disease : </span>{onGoing.disease}</h3>
                </div>
                <div>
                    <h3><span>Visited : </span>{times} times</h3>
                </div>
                <div>
                    <h3><span>Last Prescription : </span><a href={url} target="_blank">view</a></h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popup