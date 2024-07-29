import React, { useState } from 'react'
 export default function App1() {
 const city=[ {
   name:'pallavi',
   place:'Banaglore',
   age:23
  },
  {
   name:'laddu',
   place:'Chennai',
    age:22
 },
 {
   name:'lucky',
   place:'kerala',
   age:23
 }
 ]
const[data,setData]=useState(city)
 
 
  return (
    <>
 <table border={1}>
  <tr>
  <th>name</th>
  <th>place</th>
  <th>
    age
  </th>
  </tr>
     
      {data.map((key)=><tr> <td>{key.name}</td><td>{key.place} </td><td>{key.age}</td></tr>)}
       
      </table>
    </>
  )
}i