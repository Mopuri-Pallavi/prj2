import React, { useState} from 'react'
import "./style.css"
export default function App() {
  const person={
    fname:'Ganesh',
    lname:'Yadav',
    age:22
  }
  const[state,setState]=useState(person)
  const update=()=>{
    setState({fname:'Ganesh',lname:'Yadav'})
  }
return(
  <>
  <h3>First name is<span className='txt'>{state.fname}</span> and last name is<span className='txt'>{state.lname}</span></h3>
  <button onClick={update}>update</button>
  </>
)
}
