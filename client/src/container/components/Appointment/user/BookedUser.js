import React from "react";

function BookedUser(props) {
  return (
    <div className="booked-appointment-box">
      <div className="top">
        <h1>Details of Booked Appointment</h1>
      </div>
      {/* <div className="book-details">
        <div>
          <h3>
            <span>Your Token No. : </span>10
          </h3>
        </div>
        <div>
          <h3>
            <span>Ongoing Token : </span>5
          </h3>
        </div>
        <div>
          <h3>
            <span>Estimated Time : </span>10 min
          </h3>
        </div>
      </div> */}
      <div className="book-details">
        <div>
          <h1>Doctor Details</h1>
        </div>
        <div>
            <h4><span>Name : </span>{props.details.doctor}</h4>
        </div>
        <div>
            <h4><span>Adress : </span>{props.details.address}</h4>
        </div>
      </div>
    </div>
  );
}

export default BookedUser;
