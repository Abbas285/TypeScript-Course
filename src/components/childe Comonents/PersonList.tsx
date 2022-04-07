import React from 'react'
import {Name} from './PersonTypes'
type personlists={
    // namelist:{
    //     firstname:string
    //     lastname:string
    // }[]
    namelist:Name[]
}
const PersonList = (props:personlists) => {
  return (
    <div>
        {props.namelist.map((item,index)=>{
return<h4 key={index}>{item.firstname} and {item.lastname}</h4>
        })}

    </div>
  )
}

export default PersonList