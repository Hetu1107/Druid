import React, { useEffect, useState } from "react";
import { GoogleLogout } from "react-google-login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useNavigate,
} from "react-router-dom";

function Dashboard(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const logout = () => {
    localStorage.removeItem("user");
    // Push to Login Page
    props.history.push("/");
  };

  return (
    <div>
      <GoogleLogout
        clientId="228410119116-q73i0va2bdvg2qnabb6msrm7d8tml87d.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </div>
  );
}

export default Dashboard;
