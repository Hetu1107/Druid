import React, { useEffect, useState } from "react";
import db from "../../Firebase";

function Person(props) {
  const [editMode, setMode] = useState(false);
  const [user_Data, setUserData] = useState([]);
  const [user_Contact, setUserContact] = useState([]);
  const [user_Medical, setUserMedical] = useState([]);
  let user_detail = [
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
        label: "Blood Group",
        value: "B+",
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
        label: "Height (ft)",
        value: "5.6",
      },
      {
        label: "Weigth",
        value: "50",
      },
    ],
    [
      {
        label: "Disease",
        value: "",
      },
      {
        label: "Alergies",
        value: "",
      },
    ],
  ];
  const [final, setFinal] = useState([]);
  useEffect(() => {
    props.setLoad(1)
    db.collection("users").onSnapshot((snap) => {
      snap.docs.map((doc) => {
        const email = localStorage.getItem("email");
        if (doc.data().email === email) {
          db.collection("users")
            .doc(doc.id)
            .onSnapshot((snap) => {
              props.setLoad(0);
              setFinal(snap.data());
            });
        }
      });
    });
  }, []);

  useEffect(() => {
    console.log(final);
    user_detail[0][0].value = final.name;
    user_detail[0][1].value = final.age;
    user_detail[1][0].value = final.blood;
    user_detail[1][1].value = final.number;
    medical[0][0].value = final.height;
    medical[0][1].value = final.weight;
    medical[1][0].value = final.disease;
    medical[1][1].value = final.alergies;
    setUserData(user_detail);
    setUserMedical(medical);
    setUserContact(contact);
  }, [final]);
  const [image, setImage] = useState(localStorage.getItem("image"));
  useEffect(() => {
    console.log(image);
  }, [image]);
  return (
    <div className="profile-data">
      <div className="left">
        <div className="top">
          <img
            src={
              image ||
              "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
            }
          />
          <div className="points">
            <div>
              <h2>300</h2>
              <h4>Points</h4>
            </div>
            <div>
              <h2>12</h2>
              <h4>Tasks</h4>
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
              <h4>Yoga Strech</h4>
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
          {user_Data.map((res, index) => {
            return (
              <div className="text two">
                <div className="text-area">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      var a = [...user_Data];
                      var name = e.target.value;
                      a[index][0].value = e.target.value;
                      setUserData(() => a);
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
                      var a = [...user_Data];
                      var name = e.target.value;
                      a[index][1].value = name;
                      console.log(name);
                      setUserData(a);
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
          {user_Contact.map((res, index) => {
            return (
              <div className="text two">
                <div className="text-area">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      var a = [...user_Contact];
                      var name = e.target.value;
                      a[index][0].value = e.target.value;
                      setUserContact(() => a);
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
                      var a = [...user_Contact];
                      var name = e.target.value;
                      a[index][1].value = e.target.value;
                      setUserContact(() => a);
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
            <h3>Medical Detail</h3>
          </div>
          {user_Medical.map((res, index) => {
            return (
              <div className="text two">
                <div className="text-area">
                  <input
                    type="text"
                    className="text-input"
                    onChange={(e) => {
                      var a = [...user_Medical];
                      var name = e.target.value;
                      a[index][0].value = e.target.value;
                      setUserMedical(() => a);
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
                      var a = [...user_Medical];
                      var name = e.target.value;
                      a[index][1].value = e.target.value;
                      setUserMedical(() => a);
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
  );
}
{
  /* <div className='text-area'>
        <input type="text" className='text-input'/>
        <label className='text-label'>Input</label>
    </div> */
  // <div className="text two">
  //         <div className="text-area">
  //           <input type="text" className="text-input" />
  //           <label className="text-label">Input</label>
  //         </div>
  //         <div className="text-area">
  //           <input type="text" className="text-input" />
  //           <label className="text-label">Input</label>
  //         </div>
  //       </div>
}

export default Person;
