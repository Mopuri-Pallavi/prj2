import React from 'react';
import { useState } from 'react'
export default function App() {
  const [state,setState]=useState("Hello")
  const handler=(e)=>{
    setState(e.target.value)
  }
  return (
    <>
    <h1>Ganesh</h1>
    <input type="text" value={state} onChange={handler}/>

    </>
  );
}