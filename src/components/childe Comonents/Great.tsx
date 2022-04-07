import React from 'react'
 
type abcd={
      name:string,
      messgecount?:number,   //? FOR OPTIONAL PROPS
      islogdin:boolean,
    }

    export const Great = (props:abcd) => {
  return (
    <div>
        {props.islogdin?<h1>logdin user</h1>:<h1>Not Logdin</h1>}
        
        Great  {props.name} and number ={props.messgecount}
        
        </div>
  )
}

 