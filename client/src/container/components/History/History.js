import React, { useEffect, useState } from "react";
import DocHistory from "./DocHistory";
import UserHistory from "./UserHistory";
import { useNavigate } from "react-router-dom";

// style
import "../../style/History.scss";
function History(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const check = () => {
    if (localStorage.getItem("type") === "doctor") {
      return <DocHistory setLoad={props.setLoad} />;
    } else {
      return <UserHistory setLoad={props.setLoad} />;
    }
  };
  return <>{check()}</>;
}

export default History;
