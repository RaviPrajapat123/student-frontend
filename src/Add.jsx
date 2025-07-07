import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Add() {
    const {id}=useParams()
    const navigate=useNavigate()
    const [data,setData]=useState({
      name:"",
      email:""
    })
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setData((prev)=>{
        return{
          ...prev,
          [name]:value
        }
      })
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log("user add",data)
      navigate("/")
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col'>

      <input type='text' placeholder='name' name='name' value={data.name} className='border' onChange={handleChange}></input>
      <input type='email' placeholder='email' name='email' value={data.email} className='border' onChange={handleChange}></input>
      <button type='submit'>Add User</button>
      </form>
    </div>
    
  )
}

export default Add