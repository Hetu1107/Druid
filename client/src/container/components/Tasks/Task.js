import React, { useState } from 'react'
import Board from './LeaderBoard/Board'
import TodayTask from './TodaysTask/TodayTask';
import '../../style/Task.scss';
function Task() {
  const [selectedState,setSelected] = useState(<Board/>);
  return (
    <div className='main-task'>
        <div className='main-change'>
          <div className='selected' id='one_score' onClick={()=>{
            document.getElementById('one_score').classList.add('selected');
            document.getElementById('two_score').classList.remove('selected');
            setSelected(<Board/>);
          }}>
            <h3>LeaderBoard</h3>
          </div>
          <div id='two_score' onClick={()=>{
            document.getElementById('one_score').classList.remove('selected');
            document.getElementById('two_score').classList.add('selected');
            setSelected(<TodayTask/>);
          }}>
            <h3>Today's Task</h3>
          </div>
        </div>
        {selectedState}
    </div>
  )
}

export default Task