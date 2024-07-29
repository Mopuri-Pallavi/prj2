import React, { useState } from 'react';
import "./style.css"
const App = () => {
  const [x, y] = useState(10);
const P = () => {
    if (x < 1000) {
      y(x + 1);
    }
  };

  const P1 = () => {
    if (x > 0) {
      y(x - 1);
    }
  };

  return (

    <div style={{ textAlign: 'center' }}>
      <button onClick={P1} style={{ backgroundColor: "skyblue" }}> - </button>
      <button> <span style={{ margin: '0 10px' }}>{x}</span> </button>
      <button onClick={P} style={{ backgroundColor: "skyblue" }}> + </button>
    </div>

  );
};

export default App;