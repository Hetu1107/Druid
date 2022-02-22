import React, { useState } from 'react'
import BookAppointment from './BookAppointment'

function UserAppointment() {
  const [payment,setPayment] = useState(0);
  const [BookesDoctor,setBookedDoc] = useState({});
  
  return (
    <div className='appointment-box'>
        <BookAppointment setPayment={setPayment} setBookedDoc={setBookedDoc}/>
    </div>
  )
}

export default UserAppointment