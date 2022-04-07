import React,{useContext} from 'react'
import {UserContext} from './UserContext'

const User = () => {
    const state=useContext(UserContext)
    const handleLogin=()=>{
    
        state.setUser({
            name:"Abbas ali",
            email:"abcd@xyz"
        })
    
    }
    const handleLogout=()=>{

    state.setUser(null)

    }
  return (
    <div>
<button onClick={handleLogin}>Login</button>
<button onClick={handleLogout}>LogOut</button>
<div> User name is {state.user?.name} </div>
<div> User email is {state.user?.email}</div>
    </div>
  )
}

export default User