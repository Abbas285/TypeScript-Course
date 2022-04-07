import React,{useState,useRef,useEffect} from 'react'

const MutablerEF = () => {
const [timer,setTimer]=useState(0)
const intervALrEF=useRef<number|null>(null)

const stopTimer =()=>{
  if(intervALrEF.current)  window.clearInterval(intervALrEF.current)
}
useEffect(()=>{
    intervALrEF.current=window.setInterval(()=>{
        setTimer((timer)=>timer+1)
    },1000)
    return ()=>{
        stopTimer()
    }
},[])

  return (
    <div>

        Hook Timer  ={timer}
        <button onClick={()=>stopTimer()}>Stop Timer</button>


    </div>
  )
}

export default MutablerEF