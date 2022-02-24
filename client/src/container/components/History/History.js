import React from 'react'
import DocHistory from './DocHistory'
import UserHistory from './UserHistory'

// style 
import '../../style/History.scss'
function History() {
    const check = () =>{
        if(1){
           return <DocHistory/>
        }
        else{
           return <UserHistory/>
        }
    }
  return (
    <>
        {
            check()
        }
    </>
  )
}

export default History