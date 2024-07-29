import React from 'react'
import ReactDOM from 'react-dom/client';
import './style.css'
let weight = prompt("enter weight")
let height = prompt("enter height")
let h = height*height
let BMI = weight/h
let value
if (BMI <= 18) {
    value = 'Under-Weight'
} else if (BMI >= 18 && BMI <= 25) {
    value = 'Normal'
} else if (BMI >= 25 && BMI <= 30) {
    value = 'Over weight'
} else {
    value = "Obesity"
}
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>{weight}</h1>
    <h1>{height}</h1>
    <h1>{h}</h1>
    <h1>{BMI}</h1>
    <h1>{value}</h1>
  </>
);