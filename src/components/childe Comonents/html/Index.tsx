// import React from 'react'
import {CustomButton} from './Button'
import { Input } from './Input'
import CustomComponent from './CustomComponent'
const Index = () => {
  return (
    <div>
<h3>HTML Elements</h3>
<CustomButton variant='primary' onClick={()=>console.log('clicked')}>
 Primary Button 
</CustomButton>
<Input value="abbs"/>
<br/>
<CustomComponent  islogdin={true} name="abbas"/>
    </div>
  )
}

export default Index