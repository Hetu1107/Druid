import React, { useEffect, useState } from "react";
import '../../../style/Task.scss';
const score_data = [
  {
    name: "Hetu Patel",
    tasks : 4,
    score: 100,
  },
  {
    name: "Hetu Patel",
    tasks : 5,
    score: 200,
  },
];
let a = [];
function Board() {
  // sorting data with scores
  const sort_data = () => {
    if(a.length==0){
      let i = 0;
      let n = score_data.length;
      while (n-- > 0) {
        if (score_data[i].score > 0) {
          a.push(score_data[i]);
        }
        i++;
      }
      a.sort((x, y) => (x.score > y.score ? 1 : -1));
    }
  };
  useEffect(() => {
    sort_data();
  }, []);
  //   assign value to the data
  const [sorted, setSorted] = useState(a);
  const empty_or_not = () => {
    sort_data();
    if (sorted.length == 0) {
      return (
        <div className="empty">
          <h4>Nothing Here...</h4>
        </div>
      );
    } else {
      return sorted.map((res, index) => {
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
