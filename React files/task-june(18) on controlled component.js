import React from 'react';
import { useState } from 'react'
export default function App() {
  const [state, setState] = useState("Hello")
  const handler = (e) => {
    setState(e.target.value)
  }
  return (
    <>

      <h1>Controlled component</h1>
      <h1>YOU SELECTED  <span style={{ color: 'yellow' }}> {state}</span>  COURSE</h1>

      <select onChange={handler}  >

        <option >React</option>
        <option>Java</option>
        <option>DBMS</option>
        <option>SQL</option>
        <option>Angular</option>

      </select>

    </>
  );
}