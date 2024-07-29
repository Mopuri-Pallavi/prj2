import React from 'react'
import { useEffect } from 'react'
export default function App() {
  useEffect(()=>{
    console.log("mounted")
  })
  return (
    <>  
      <h3>hello</h3>     
    </>
  )
}
