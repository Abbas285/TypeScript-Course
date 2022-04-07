import React from 'react'
import User from './User'
import { UserContextProvider } from './UserContext';
function UserContextIndex() {
  return (
   <UserContextProvider>
       <User/>
   </UserContextProvider>
  )
}

export default UserContextIndex