import React, { useState, useEffect } from 'react';
export default function Random_API() {
  const [state, setState] = useState([]);
 useEffect(() => {
    fetchData();  
  }, []);
 const fetchData = () => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(json => setState(json.results))
      .catch(error => console.error('Error fetching data:', error));
  };
 
  const handleButtonClick = () => {
    fetchData();
  };
 
  return (
    <>
      <ul>
        {state.map((user, index) => (
          <li key={index}>{user.name.first}</li>
        ))}
      </ul>
      <button onChange={handleButtonClick}>Get Data</button>
    </>
  );
}