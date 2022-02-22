import React from "react";

function ListOfBooked() {
  return (
    <div className="list">
      <div className="top">
        <h1>List Of Patients</h1>
      </div>
      <div className="search-bar">
        <input className="search" type="search" placeholder="search here..." />
      </div>
      <div className="search-results">
        <div
          className="item"
        >
          <div className="left">
            <h2>Hetu Patel</h2>
          </div>
          <div className="right">
            <i class="fas fa-angle-left"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOfBooked;
