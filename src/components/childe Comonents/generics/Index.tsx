import React from 'react'
import {List} from './List'
const Index = () => {
  return (
    <div>
       <h4>Generic Props</h4>
<br/>
<List item={["Batman",'Superman','Wonder Women']} 
onClick={(item)=>console.log(item)
}/>
<br/>
<List item={[1,2,3,4]} 
onClick={(item)=>console.log(item)
}/>
{/* <List item={[{first:'Bruce',last:'Wayne'},{first:'Clark',last:'Kent'},
{first:'Princess',last:'Diana'}]} 
onClick={(item)=>console.log(item)
}/> */}

    </div>
  )
}

export default Index