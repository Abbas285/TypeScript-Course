import React from 'react'
import {personProps} from './PersonTypes'
// type personProps={
//     name:{
//         firstname:string
//         lastname:string
//     }
// }
const Person = (props:personProps) => {
  return (
    <div>Person firstname={props.name.firstname} and last name ={props.name.lastname}</div>
  )
}

export default Person