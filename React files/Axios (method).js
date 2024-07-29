import React from 'react'
import {useState} from 'react'
import axios from 'axios'
export default function App43() {
    const [state,setState]=useState([])
    function handler(){
    axios.get('https://randomuser.me/api/?results=30')
        .then((res)=>{
            //console.log(res)
            //console.log(res.data.results)
            setState(res.data.results)
        })
    }
  return (
    <>
      {state.map((list)=><li>{list.name.first}</li>)}
      <button onClick={handler}>get data</button>
    </>
  )
}
 
