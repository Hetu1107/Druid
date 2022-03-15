import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.scss";
import "./style/Load.scss";
// components
import Nav from "./components/NavBar/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Login/Dashboard";
import User from "./components/user/User";
import RegisterMain from "./components/Register/RegisterMain";
import MainAppointment from "./components/Appointment/MainAppointment";
import History from "./components/History/History";
import Task from "./components/Tasks/Task";

// main function
function App(props) {
  const [user, setUser] = useState([]);
  const [Loadind, setLoad] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
      console.log(user);
    }
  });
  const Loader = () => {
    if (Loadind == 1) {
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
  return (
    <Router>
      <div className="main-app">
        <Nav user={user} />

        {/* loader */}
        {Loader()}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Task/>} />
          <Route path="/user" element={<User setLoad={setLoad}/>} />
          <Route
            path="/appointment"
            element={<MainAppointment setLoad={setLoad} />}
          />
          <Route path="/register" element={<RegisterMain />} />
          <Route path="/history" element={<History/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
