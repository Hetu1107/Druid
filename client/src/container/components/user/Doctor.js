import React, { useState } from 'react'
let doctor_detail = [
  [
    {
      label: "Name",
      value: "Hetu Patel",
    },
    {
      label: "Age",
      value: "19",
    },
  ],
  [
    {
      label: "Email",
      value: "hetu200@gmail.com",
    },
    {
      label: "M-Number",
      value: "9978452565",
    },
  ],
];
let contact = [
  [
    {
      label: "City",
      value: "Vadodara",
    },
    {
      label: "Pincode",
      value: "390025",
    },
  ],
];
let medical = [
  [
    {
      label: "Degree",
      value: "MBBS",
    },
    {
      label: "Experience",
      value: "12 year",
    },
  ],
];
let adress = "103, vastu flats, ellora park, vastuflats,vadodara,390023";
function Doctor() {
  const [editMode, setMode] = useState(false);
  const [doctor_Data, setDoctorData] = useState(doctor_detail);
  const [doctor_Contact, setDoctorContact] = useState(contact);
  const [doctor_Medical, setDoctorMedical] = useState(medical);
  const [doctor_Adress,setDoctorAdress] = useState(adress);
  return (
    <div className="profile-data">
      <div className="left">
          <div className="top">
              <img src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"/>
              <div className="points">
                <div>
                    <h2>300</h2>
                    <h4>Patients</h4>
                </div>
                <div>
                    <h2>12</h2>
                    <h4>Stars</h4>
                </div>
              </div>
              <div className="activity">
                    <h2>Your Activity</h2>
                    <div className="activities">
                        <h4>Nothing is here...</h4>
                    </div>
              </div>
              <div className="today-task">
                    <h2>Todays Task</h2>
                    <div className="t-task">
                        <h4>Patient to visit</h4>
                    </div>
              </div>
          </div>
      </div>
      <div className="right">
        <div className="top">
          <h2>My Details</h2>
          <button
            className="btn primary"
            id="edit"
            onClick={(e) => {
              // saving the updated deatils
              if (editMode == true) {
                document.getElementById("edit").innerHTML = "Edit";
                setMode(false);
              } else {
                document.getElementById("edit").innerHTML = "Save";
                setMode(true);
              }
            }}
          >
            Edit
          </button>
        </div>
        <div className="detail">
          <div className="top-detail">
            <h3>user detail</h3>
          </div>
          {doctor_Data.map((res, index) => {
            return (
              <div className="text two">
                <div className="text-area">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      var a = [...doctor_Data];
                      var name = e.target.value;
                      a[index][0].value = e.target.value;
                      setDoctorData(() => a);
                    }}
                    onFocus={(e) => {
                      if (editMode) {
                        e.target.focus();
                      } else {
                        e.target.blur();
                      }
                    }}
                    value={res[0].value}
                  />

                  <label className="text-label">{res[0].label}</label>
                </div>
                <div className="text-area">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      var a = [...doctor_Data];
                      var name = e.target.value;
                      a[index][1].value = name;
                      console.log(name);
                      setDoctorData(a);
                    }}
                    onFocus={(e) => {
                      if (editMode) {
                        e.target.focus();
                      } else {
                        e.target.blur();
                      }
                    }}
                    value={res[1].value}
                  />
                  <label className="text-label">{res[1].label}</label>
                </div>
              </div>
            );
          })}
        </div>
        <div className="line"></div>
        <div className="detail">
          <div className="top-detail">
            <h3>Contact Info</h3>
          </div>
          {doctor_Contact.map((res, index) => {
            return (
              <div className="text two">
                <div className="text-area">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      var a = [...doctor_Contact];
                      var name = e.target.value;
                      a[index][0].value = e.target.value;
                      setDoctorContact(() => a);
                    }}
                    onFocus={(e) => {
                      if (editMode) {
                        e.target.focus();
                      } else {
                        e.target.blur();
                      }
                    }}
                    value={res[0].value}
                  />
                  <label className="text-label">{res[0].label}</label>
                </div>
                <div className="text-area">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      var a = [...doctor_Contact];
                      var name = e.target.value;
                      a[index][1].value = e.target.value;
                      setDoctorContact(() => a);
                    }}
                    onFocus={(e) => {
                      if (editMode) {
                        e.target.focus();
                      } else {
                        e.target.blur();
                      }
                    }}
                    value={res[1].value}
                  />
                  <label className="text-label">{res[1].label}</label>
                </div>
              </div>
            );
          })}
        </div>
        <div className="line"></div>
        <div className='detail'>
          <div className='top-detail'>
            <h3>Adress of Hospital</h3>
          </div>
          <div className='text'>
            <div className='text-area'>
              <input className='text-input' value={doctor_Adress} 
              onChange={(e) => {
                setDoctorAdress(e.target.value);
              }}
              onFocus={(e) => {
                if (editMode) {
                  e.target.focus();
                } else {
                  e.target.blur();
                }
              }}
              type="text"/>
              <label className='text-label'>Adress</label>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="detail">
          <div className="top-detail">
            <h3>Medical Detail</h3>
          </div>
          {doctor_Medical.map((res, index) => {
            return (
              <div className="text two">
                <div className="text-area">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      var a = [...doctor_Medical];
                      var name = e.target.value;
                      a[index][0].value = e.target.value;
                      setDoctorMedical(() => a);
                    }}
                    onFocus={(e) => {
                      if (editMode) {
                        e.target.focus();
                      } else {
                        e.target.blur();
                      }
                    }}
                    value={res[0].value}
                  />
                  <label className="text-label">{res[0].label}</label>
                </div>
                <div className="text-area">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      var a = [...doctor_Medical];
                      var name = e.target.value;
                      a[index][1].value = e.target.value;
                      setDoctorMedical(() => a);
                    }}
                    onFocus={(e) => {
                      if (editMode) {
                        e.target.focus();
                      } else {
                        e.target.blur();
                      }
                    }}
                    value={res[1].value}
                  />
                  <label className="text-label">{res[1].label}</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Doctor