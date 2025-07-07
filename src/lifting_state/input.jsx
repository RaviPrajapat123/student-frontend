import React from 'react'

function input({name,setName}) {
  return (
    <>
    <input type='number' placeholder='enter name' value={name}  onChange={(e)=>setName(e.target.value)}/>
    <p>{name}</p>
    </>
  )
}

export default input