import { useEffect, useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
      console.log(user);
    }
  });
  return <Login />;
}

export default App;
