import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex bg-purple-500 gap-9 py-3 px-4'>
        <Link to={"/"} className='text-white'>Home</Link>
        <Link to={"/add"} className='text-white'>Add User</Link>
        <Link to={"/window"} className='text-white'>Window Width</Link>
        <Link to={"/userForm"} className='text-white'>User Form</Link>
    </div>
  )
}

export default NavBar