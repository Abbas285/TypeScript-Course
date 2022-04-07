import React from 'react'

type iNPUTeVENTSPROPS={
    value:string,
    handlechangr:(events:React.ChangeEvent<HTMLElement>,id:number)=>void
}
const handlechangmethod=(events:React.ChangeEvent<HTMLElement>,id:number)=>{
    console.log("input events",events,id)
}
const InputElements = ({handlechangr,value}:iNPUTeVENTSPROPS) => {
  return <input type="text" value={value} onChange={(events)=>handlechangr(events,12)}/>
}

export default InputElements