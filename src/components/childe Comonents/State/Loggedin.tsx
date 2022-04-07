import React from 'react'
import { useState } from 'react'
const Loggedin = () => {
    const [isLoggedin,setisLoggdin]=useState(false)
    const handlelogdin=()=>{
        setisLoggdin(true)
    }
    const handleLoggdinout=()=>{
        setisLoggdin(false)
    }
  return (
    <div>
<button onClick={handlelogdin}> logdin</button> {''}
<button onClick={handleLoggdinout}>Logout</button>
<div>User is {isLoggedin?'Loggin':'Not Loggin'}</div>
    </div>
  )
}

export default Loggedin