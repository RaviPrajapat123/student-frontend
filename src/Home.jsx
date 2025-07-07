import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    const [user,setUser]=useState([])
    useEffect(()=>{
          setUser([
      { id: 1, name: "Ravi", email: "ravi@example.com" },
      { id: 2, name: "Anjali", email: "anjali@example.com" },
    ]);
    },[])
  return (
    <div>
        <h2>All users</h2>
        {user.map((item)=>(
            <div key={item.id}>
                <h4>{item.name}</h4>
                <p>{item.email}</p>
                <Link to={`/viewuser/${item.id}`}>View</Link>
                <hr/>
                </div>
        ))}
    </div>
  )
}

export default Home