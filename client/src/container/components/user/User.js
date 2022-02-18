import React from "react";
import Doctor from "./Doctor";
import Person from "./Person";



// style
import '../../style/User.scss';
import '../../style/textbox.scss';

let about = 0;
function User() {
  function checkUser(){
    if (about) {
      return (<Doctor />);
    } else {
      return (<Person />);
    }
  };
  return(
      <div className="main-user-profile">
          {checkUser()}
      </div>
  );
}

export default User;
