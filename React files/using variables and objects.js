import ReactDOM from 'react-dom/client'
//defining a variable
var uid="Pallavi"
let year=2024
let students=['Laddu','Gani','Pallu','Venky']
let person={
    fname:'laddu',
    lname:'lucky',
    age:22,
    place:'pulivendula'
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <h1>Hello {uid}</h1>
    <h2>Year is{year}</h2>
    <h3>{students}</h3>
    <h3>{students[2]}</h3>
    <h2>{person.fname}</h2>
    </>
)