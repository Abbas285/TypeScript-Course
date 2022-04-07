import React from 'react'
type oscarprops={
  children:React.ReactNode
}

const Oscer = (props:oscarprops) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Oscer

