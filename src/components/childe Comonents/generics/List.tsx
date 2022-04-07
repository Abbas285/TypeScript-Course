import React from 'react'

type ListProps={
  item:string[]|number[]
  onClick:(value:string|number)=>void
}
export  const List = ({item,onClick}:ListProps) => {
  return (
    <div>List
<h2>List of items</h2>
{
  item.map((item,index)=>{
    return (<div key={index}onClick={()=>onClick(item)}> 
    {item}</div>
      )
  })
}




    </div>
  )
}

