import React,{ useState } from 'react'
export default function App() {
  const [state,setState]=useState()
const handle=(e)=>{
  setState(e.target.value)
 }
  return (
  <div>
    <h1>Select pizza size</h1>
 <form onChange={handle}>
 regular<input type='radio' name='pizza' value="regular"></input>
 medium<input type='radio' name='pizza' value="medium"></input>
 large<input type='radio' name='pizza' value="large"></input>
 <h1>select topping <span>{state}</span></h1>
</form>
  </div>
  )
}
 

  