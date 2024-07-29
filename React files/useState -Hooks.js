import React from 'react'
import { useState } from 'react'
function App(){
    const [state, setState]=useState("pallavi")
    const [name, setName]=useState("mopuri")
    return(
        <>
        <h3>React hooks</h3>
        <h3>userState hooks</h3>
        <h1>{state}</h1>
        </>
    )

}
