import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/Admin.scss";
import Async, { useAsync } from "react-select/async";
import Select from "react-select";
import db from "../../Firebase";
function Admin(props) {
let setLoad = props.setLoad;
  const [selectedOption, setSelectedOption] = useState(null);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [a, setA] = useState(localStorage.getItem("taskgiven"));
  const navigate = useNavigate();
  const options = [
    { value: "Sukhasan", label: "Sukhasan" },
    { value: "Tree", label: "Tree" },
  ];
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const AddTask = ()=>{
    setLoad(1);
    db.collection("users").get().then((query)=>{
        query.forEach(function(doc) {
            doc.ref.update({
                task: selectedOption.value,
                completed : false
            });
        });
    }).then(()=>{
        setA(1);
        localStorage.setItem("taskgiven",1);
        db.collection("admin").get().then((q)=>{
            q.forEach(function(doc){
                doc.ref.update({
                    given : 1
                })
            })
        }).then(()=>{
            setLoad(0);
        })
    })
    console.log(selectedOption.value)
  }
  const already = () => {
    if (a!=0) {
        return(
        <div className="admin-select">
            <div>
                <h1>Already selected todays task</h1>
            </div>
        </div>
        )
    } else {
      return (
        <div className="admin-select">
          <div>
            <h1>Select The Task</h1>
          </div>
          <div>
            <Select
              value={selectedOption}
              options={options}
              onChange={setSelectedOption}
            />
          </div>
          <button className="btn primary" onClick={AddTask}>submit</button>
        </div>
      );
    }
  };
  return (
    <div className="admin-main">
      <div className="admin-box">{already()}</div>
    </div>
  );
}

export default Admin;
