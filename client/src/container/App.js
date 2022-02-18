import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.scss";

// components
import Nav from "./components/NavBar/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Login/Dashboard";

// main function
function App(props) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
      console.log(user);
    }
  });
  return (
    <Router>
      <div className="main-app">
        <Nav user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// zaids code
{
  /* <Router>
        <Switch>
          <Route exact path="/">
            <Login user={user} />
          </Route>
          <Route exact path="/register"></Route>
          <Route exact path="/dashboard">
            <Dashboard user={user} />
          </Route>
        </Switch>
      </Router> */
}
