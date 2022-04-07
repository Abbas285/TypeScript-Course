import React,{useState} from 'react'
type usesrtateprops={
    user:string,
    email:string
}

const User = () => {
    const [userinput,setuser]=useState({} as usesrtateprops)
    // const [userinput,setuser]=useState <usesrtateprops|null>(null)
    const logdinuser=()=>{
setuser({
    user:"abbas",
    email:"abbas@abc"
})
    }
    // const logoutuser=()=>{
    //     setuser(null)
    // }

  return (
    <div>
    <button onClick={logdinuser}>Logdin</button>
    {/* <button onClick={logoutuser}>Loggout</button> */}
    {/* <div>User name  is {userinput?.user}</div>
    <div>User email is {userinput?.email} </div> */}
    <div>User name  is {userinput.user}</div>
    <div>User email is {userinput.email} </div>
    </div>
  )
}

export default User
