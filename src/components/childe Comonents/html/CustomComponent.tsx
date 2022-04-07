import React from 'react'
import {Great} from './../Great'
const CustomComponent = (props:React.ComponentProps<typeof Great>) => {
  return (
    <div> Extracting a Components Prop Type
      
        <br/>
      {
        props.islogdin
      }
      {props.name}

    </div>
  )
}

export default CustomComponent