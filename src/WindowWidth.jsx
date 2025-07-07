import React, { useEffect, useState } from 'react'

function WindowWidth() {
    const [width,setWidth]=useState(window.innerWidth)
    useEffect(()=>{
            const windowRisize=()=>setWidth(window.innerWidth)
            window.addEventListener("resize",windowRisize)
            
            return ()=>{
                window.removeEventListener("resize",windowRisize)
            }
    },[])
  return (
    <div>Window width: {width}</div>
  )
}

export default WindowWidth