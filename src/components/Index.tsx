
import {Great} from './childe Comonents/Great'
import Person from './childe Comonents/Person'
import PersonList from './childe Comonents/PersonList'
import Status from './childe Comonents/Status'
import Heading from './childe Comonents/Heading'
import Oscer from './childe Comonents/Oscer'
import Button from './childe Comonents/Button'
import Input from './childe Comonents/InputElements'
import Container from './childe Comonents/Container'
import Loggedin from './childe Comonents/State/Loggedin'
import UserComponent from './childe Comonents/State/User'
import UseReducerHook from './childe Comonents/State/Counter'
import UseContextApiHook from './childe Comonents/State/context/Index'
import UseRefComponent from './childe Comonents/State/ref/Index'
import ClassComponent from './childe Comonents/ClassComponents/Index'
import ComponentProps from './childe Comonents/auth/Index'
import GenericProps from './childe Comonents/generics/Index'
import {RendomNumberProps} from './childe Comonents/restruction/RendomNumberProps'
import TempeleteLiteral from './childe Comonents/Templateliterals Exclude/Index'
import HTMLElements from './childe Comonents/html/Index'
import Polymorphic from './childe Comonents/polymorphic/Index'



const Index = () => {
    const name={
        firstname:"abbas",
        lastname:"ali"
    }
    const namelist=[  {    
        firstname:"Abbas",
        lastname:"ali",
     },  {    
        firstname:"Arslan",
        lastname:"Ahmed",
     }]
  return (
    <div>
<h3>TypeScript Project</h3>
<Great name=" name is abbas"  islogdin={false}/>
<Person name={name}/>
<PersonList namelist={namelist}/>
<Status status="loading"/>
<Heading>
    PlaceHolder Text
</Heading>
<Oscer>
   <Heading>
       component within component
   </Heading>
</Oscer>
<Button handleClick={(event,id)=>console.log("Button Clicked",event,"id is",id)}/>
<Input value="input Events" handlechangr={(events,id)=>console.log("events",events,id)}/>
<Container style={{}} style2={{fontSize:"25px"}}/>
<br/>
<h3>State components</h3>
<Loggedin/>
<UserComponent/>

<h3>UseReducer Hook</h3>
<UseReducerHook/>
<br/><br/>
<UseContextApiHook/>
<br/>
<br/>
<UseRefComponent/>
<br/>
<br/>
<ClassComponent/>
<br/>
<br/>
<ComponentProps/>
<br/>
<br/>
<GenericProps/>
<br/>
<br/>
<RendomNumberProps value={10 } isPositive />
<RendomNumberProps value={10 } isNegative />
<RendomNumberProps value={10 } isZero />
<br/>
<br/>
<TempeleteLiteral/>
<br/>
<br/>
<HTMLElements/>
<br/>
<br/>
<Polymorphic/>
<br/>
<br/>

    </div>
  )
}

export default Index