import React from 'react'

// Components
import DoctorAppointment from './Doc/DoctorAppointment'
import UserAppointment from './user/UserAppointment'


// styles
import '../../style/Appointment.scss';
import '../../style/List.scss';

function MainAppointment() {
    const a = 0;
    const check =  () =>{
        if(a){
            return <DoctorAppointment/>
        }
        else{
            return <UserAppointment/>
        }
    }
  return (
      <div className='main-appointment'>
        {
            check()
        }
    </div>
  )
}

export default MainAppointment