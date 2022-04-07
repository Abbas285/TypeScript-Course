import React from 'react'
type ButtonEvents={
    handleClick:(events:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}
const Button = (props:ButtonEvents) => {
  return (
    <div>
        <h3>TypeScript with Events</h3>
        <button onClick={(event)=>props.handleClick(event,2)}>Click Events</button>
    </div>
  )
}

export default Button