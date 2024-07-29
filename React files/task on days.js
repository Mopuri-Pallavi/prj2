import React from 'react';
import ReactDOM from 'react-dom/client';
const obj = new Date();
const h = obj.getHours();
const style = {};
let message ="";
if (h < 12) {
  message ="Good morning";
  style.color = "green";
} else if (h >= 12 && h < 17) {
  message ="Good afternoon";
  style.color = "blue";
} else {
  message ="Good evening";
  style.color ="orange";
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h2 style={style}>{message}</h2>
  </>
);