import ReactDOM from 'react-dom/client'
//defining a variable
var uid="Pallavi"
let year=2024
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <h1>Hello {uid}</h1>
    <h2>Year is{year}</h2>
    </>
)