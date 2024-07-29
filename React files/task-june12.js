import React,{useState} from 'react'
 const person={
  fname:'Ganesh'
}
export default function App() {
  const [state,setstate]=useState(person)
  function p(){
   if(state.fname=='Ganesh'){
    setstate({fname:'Yadav'})}
    else{
      setstate({fname:'Ganesh'})}
    }
   
  return (  
  <>
     <h2>First Name is <span className='txt'>{state.fname}</span></h2>
    <button onClick={p}>update</button>
  </>
  )
}
