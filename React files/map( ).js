import React from 'react'
export default function Map1() {
  const num = [1,2,3,4,5]
     return (
    <>
      {num.map((x)=><li>{x*2}</li>)}

      </>
  )
}
