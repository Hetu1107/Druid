import React, { useEffect, useState } from "react";
import db from "../../../Firebase";
const score_data = [
  {
    name: "Hetu Patel",
    tasks: 4,
    score: 100,
  },
  {
    name: "Hetu Patel",
    tasks: 5,
    score: 200,
  },
];
let a = [];
function Board(props) {
  const setLoad = props.setLoad;
  // loading
  const [users, setUsers] = useState([]);
  // sorting data with scores
  const sort_data = () => {
    setLoad(1);
    if (a.length == 0) {
      let i = 0;
      let n = users.length;
      while (n-- > 0) {
        if (users[i].score >= 0) {
          a.push(users[i]);
        }
        i++;
      }
      a.sort((x, y) => (x.score < y.score ? 1 : -1));
    }
    setLoad(0);
  };
  useEffect(() => {
    sort_data();
  }, [users]);

  useEffect(() => {
    setLoad(1);
    db.collection("users").onSnapshot((snap) => {
      setUsers(snap.docs.map((doc) => doc.data()));
      setLoad(0);
    });
  }, []);

  const empty_or_not = () => {
    sort_data();
    if (users.length == 0) {
      return (
        <div className="empty">
          <h4>Nothing Here...</h4>
        </div>
      );
    } else {
      return a.map((res, index) => {
        return (
          <>
            <div className="line"></div>
            <div className="row">
              <div className="col 1">
                <h4>{index + 1}</h4>
              </div>
              <div className="col 2">
                <h4>{res.name}</h4>
              </div>
              <div className="col 3">
                <h4>{res.tasks}</h4>
              </div>
              <div className="col 4">
                <h4>{res.score}</h4>
              </div>
            </div>
          </>
        );
      });
    }
  };
  return (
    <div className="main-leader-board">
      <div className="history-main-box">
        <div className="row head">
          <div className="col 1">
            <h4>No.</h4>
          </div>
          <div className="col 2">
            <h4>Name</h4>
          </div>
          <div className="col 3">
            <h4>Task-completed</h4>
          </div>
          <div className="col 4">
            <h4>Score</h4>
          </div>
        </div>
        {empty_or_not()}
      </div>
    </div>
  );
}

export default Board;
