import React from 'react'
import { useState } from 'react'
export default function App() {
  const [state,setState]=useState([])
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      //.then(json => console.log(json))
       .then(json=>setState(json))
       
  return (
    <>  
      <h3 align='center'>Pallavi</h3>
     <table border={2} align='center'>
     {state.map((val)=><tr><td>{val.id}</td><td>{val.title}</td></tr>)}
     </table>
     
    </>
  )
}
