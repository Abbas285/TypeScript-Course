import React,{useRef,useEffect} from 'react'

const DomRef = () => {
    const inputref=useRef<HTMLInputElement>(null!)// ! for shure that this is not null 
useEffect(()=>{
    inputref.current.focus() //* this is commint
})
  return (
    <div >DomRef

<input type='text' ref={inputref}/>

    </div>
  )
}

export default DomRef


//?dddd commint
//dddd commint
//todo: commint
//! commint