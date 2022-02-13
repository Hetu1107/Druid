import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import './style/App.scss';
import Main from "./components/Main/Main";
function App(props) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
      console.log(user);
    }
  });
  return (
    <div className="main-app"> 
      <Main/>
    </div>
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
