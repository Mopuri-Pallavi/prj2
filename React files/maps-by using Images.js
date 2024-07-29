import React, { useState } from 'react'
import Data from './info.json'
const w = {
  width: '300px'
}
export default function App() {

  const [state, setState] = useState(Data)
  return (
    <>
      {state.map((x) =>
        <>
          <img src={x.pic} alt="" style={w} />
          <h4>{x.name}</h4>
        </>
      )}
    </>
  )
}

