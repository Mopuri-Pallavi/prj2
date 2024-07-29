import React from 'react'
import ReactDOM from 'react-dom/client'
let a=new Date()
let b=a.getHours()
if(b<12){
    b="good morning"
}else if(b>=5){
    b="good afternoon"
}else {
    b="good evening"
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
<h1>{b}</h1>
    </>
 
)