import React from 'react'
import {Private} from './Private'
import Profile from './Profile'
const Index = () => {
  return (
    <div>
        {/* isLoggedin,Component */}
        <h5>Copmponent Props</h5><br/>
<Private isLoggedin={true} component={Profile}/>

    </div>
  )
}

export default Index