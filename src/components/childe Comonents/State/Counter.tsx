import React,{useReducer} from 'react'

type updatetype={
    type: 'increment'| 'decrement',
    payload:number
}
type resettype={
    type:'resetvalue'
}

type actiontype=updatetype|resettype

type countnumbers={
    count:number
}
const initialstate={
    count:0
}
const reducer=(state:countnumbers,action:actiontype)=>{
    switch(action.type){
        case 'increment':return{
            count:state.count+action.payload
        }
        case 'decrement':return{
            count:state.count-action.payload
        }
        case 'resetvalue':return {count:initialstate.count}
       default: return state
    }
}
const Counter = () => {
    const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
Count:{state.count}
<br/><br/>
<button onClick={()=>dispatch({type:'increment',payload:10})}>incremet 10</button>
<button onClick={()=>dispatch({type:'decrement',payload:10})}>incremet 10</button>
<button onClick={()=>dispatch({type:'resetvalue'})}>Reset value</button>
    </div>
  )
}

export default Counter