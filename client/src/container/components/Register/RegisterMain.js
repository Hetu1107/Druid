import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../../Firebase";
import "../../style/Register.scss";
import "../../style/textbox.scss";
import Wave from "../Wave/Wave2";
let user_detail_get = [
  [
    {
      label: "Name",
      value: "",
    },
    {
      label: "Number",
      value: "",
    },
  ],
  [
    {
      label: "Age",
      value: "",
    },
    {
      label: "Blood Group",
      value: "",
    },
  ],
  [
    {
      label: "City",
      value: "",
    },
    {
      label: "Pincode",
      value: "",
    },
  ],
];
let health_user_data = [
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
  [
    {
      label: "Weigth",
      value: "",
    },
    {
      label: "Height",
      value: "",
    },
  ],
];
function RegisterMain() {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [user_Get_Detail, setUserGetDetail] = useState(user_detail_get);
  const [user_Health_Detail, setUserHealthDetail] = useState(health_user_data);

  const navigate = useNavigate();
  const submit = () => {
    db.collection("users")
      .add({
        email,
        name: user_detail_get[0][0].value,
        number: user_detail_get[0][1].value,
        age: user_detail_get[1][0].value,
        blood: user_detail_get[1][1].value,
        disease: user_Health_Detail[0][0].value,
        alergies: user_Health_Detail[0][1].value,
        weight: user_Health_Detail[1][0].value,
        height: user_Health_Detail[1][1].value,
        score : 0,
        tasks : 0,
        task : "nothing is here",
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="main-user-registration">
      <Wave />
      <div className="registration-box">
        <div className="heading max">
          <h1>Last Step Before You Get Started</h1>
        </div>
        {/* first deatils */}
        <div className="detail">
          <div className="heading">
            <h1>Personal Detail</h1>
          </div>
          <div className="before-text-box">
            {user_Get_Detail.map((res, index) => {
              return (
                <div className="text two">
                  <div className="text-area">
                    <input
                      type="text"
                      className="text-input"
                      onChange={(e) => {
                        var a = [...user_Get_Detail];
                        a[index][0].value = e.target.value;
                        setUserGetDetail(a);
                      }}
                    />
                    <label className="text-label">{res[0].label}</label>
                  </div>
                  <div className="text-area">
                    <input
                      type="text"
                      className="text-input"
                      onChange={(e) => {
                        var a = [...user_Get_Detail];
                        a[index][1].value = e.target.value;
                        setUserGetDetail(a);
                      }}
                    />
                    <label className="text-label">{res[1].label}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* second detail started */}
        <div className="detail">
          <div className="heading">
            <h1>Health Detail</h1>
          </div>
          <div className="before-text-box">
            {user_Health_Detail.map((res, index) => {
              return (
                <div className="text two">
                  <div className="text-area">
                    <input
                      type="text"
                      className="text-input"
                      onChange={(e) => {
                        var a = [...user_Health_Detail];
                        a[index][0].value = e.target.value;
                        setUserHealthDetail(a);
                      }}
                    />
                    <label className="text-label">{res[0].label}</label>
                  </div>
                  <div className="text-area">
                    <input
                      type="text"
                      className="text-input"
                      onChange={(e) => {
                        var a = [...user_Health_Detail];
                        a[index][1].value = e.target.value;
                        setUserHealthDetail(a);
                      }}
                    />
                    <label className="text-label">{res[1].label}</label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* btn area started  */}
        <div className="btn-area">
          <button onClick={submit} className="btn primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

/* <div className="detail">
          <div className="heading">
            <h1>Personal Detail</h1>
          </div>
          <div className="before-text-box">
          <div className="text two">
            <div className="text-area">
              <input type="text" className="text-input" />
              <label className="text-label">Name</label>
            </div>
            <div className="text-area">
              <input type="text" className="text-input" />
              <label className="text-label">Phone</label>
            </div>
          </div>
          </div>
        </div> */
export default RegisterMain;
