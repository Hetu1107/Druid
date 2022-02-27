import React, { useState } from "react";
import "../../../style/Priscription.scss";
function Priscription() {
  const [priscription, setPriscription] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div className="main-prescription" id="main-prescription">
      <div className="priscription-box">
        <div className="head">
          <h1>Add Priscription</h1>
        </div>
        <form
          className="input-area"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(priscription);
            if (input.trim() != "") {
              setPriscription([...priscription, input]);
            }
          }}
        >
          <input
            type="text"
            placeholder="type here..."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit" className="btn primary">
            Add
          </button>
        </form>
        <div className="search-results">
          {priscription.map((res, index) => {
            return (
              <div className="item" id={`priscription-${index + 1}`}>
                <div className="left">
                  <h2>{res}</h2>
                </div>
                <div className="right">
                  <i
                    class="fas fa-minus-circle"
                    onClick={() => {
                      let arr = priscription;
                      arr.splice(index, 1);
                      setPriscription(arr);
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="det-box but">
          <button
            className="btn secondary"
            onClick={() => {
              document.getElementById("main-prescription").style.opacity = "0";
              document.getElementById("main-prescription").style.zIndex = "-1";
            }}
          >
            Cancel
          </button>
          <button className="btn primary">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Priscription;
