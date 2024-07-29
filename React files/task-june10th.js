import React from "react"
import { useState } from "react"
export default function App(){
  const person=[
    {
      name:'Pallavi',
      place:'Banglore',
      age:22
    },
    {
      name:'Ganesh',
      place:'Hyderabad',
      age:22
    },
    {
      name:'Lucky',
      place:'Kerala',
      age:22
    }
  ]
  const [data, setdata]=useState(person)
  return(
    <>
    <table border='2px'>
    <tr>
      <td>Name</td>
      <td>place</td>
      <td>age</td>
      
    </tr>
    {data.map((x)=><tr><td>{x.name}</td><td>{x.place}</td><td>{x.age}</td></tr>)}
    </table>
     </>
  )
}