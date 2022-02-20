import React, { useEffect, useState } from "react";
import "../../style/Load.scss";
function Load(props) {
  const [showLoader, setShowLoader] = useState(props.load);
  const display = () => {
    if (showLoader==1) {
      return (
        <div class="showbox" id="loader">
          <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
              <circle
                class="path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke-width="2"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  };
  return <>{display()}</>;
}

export default Load;
