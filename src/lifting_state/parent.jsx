import React, { useState } from 'react'
import Input from "./input"
import Double from "./double"
function parent() {
    const [name,setName]=useState("")
  return (
    <div>
        <Input name={name} setName={setName}/>
        <Double name={name}/>
    </div>
  )
}

export default parent