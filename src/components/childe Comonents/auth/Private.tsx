import React from 'react'
import { Login } from './Login'
import {profileprops} from './Profile'

type PrivateProps={
    isLoggedin:Boolean,
    component:React.ComponentType<profileprops>
}
export const Private = ({isLoggedin,component:Component}:PrivateProps) => {
 if(isLoggedin ){
     return <Component name="abbas"/>}

     else{
         return <Login/>
     }
 
}

 