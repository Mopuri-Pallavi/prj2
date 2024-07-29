import React, { useState } from 'react'
import "./style.css"
import pic from './images/teddy.jpg'
export default function Rotate() {
  const [state,setState]=useState('img')
  function test(){
    if(state==='img'){
    setState('img1')
    }else{
      setState('img')  
    }
  }
  return (
    <>
      <img src={pic} alt='' className={state}/>
      <br/><br/>
      <button onClick={test}>rotate</button>
    </>
  )
}