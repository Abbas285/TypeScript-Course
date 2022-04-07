import React from 'react'
type propsplace={
    children: string;
}
const Heading = (props:propsplace) => {
  return (
    <div>

{
    props.children
}

    </div>
  )
}

export default Heading