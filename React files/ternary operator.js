import React,{useState} from 'react'
 const person={
  fname:'Hello'
}
export default function App() {
  const [state,setstate]=useState(person)
  function p(){
   (state.fname=='Hello'?setstate(
  }
  return (  
  <>
     <h2>Hello <span className='txt'>{state.fname}</span></h2>
    <button onClick={p}>update</button>
  </>
  )
}
