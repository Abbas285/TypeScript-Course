import React from 'react'
type Containerprops={
    style:React.CSSProperties,
    style2:React.CSSProperties

}
const style3:React.CSSProperties={
    border:'1px solid black',padding:'1rem',backgroundColor:"green",
marginTop:'25px',marginLeft:"25px",marginRight:"25px"
} 
const Container = (props:Containerprops) => {
  return (
    <div style={style3}>
     <span style={props.style2} > 
     Container
         </span>   
        
        </div>
  )
}

export default Container