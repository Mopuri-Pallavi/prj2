import React, { useState,Link,Route,Routes } from 'react';
import Home from './Home';
import './Food.css'
import bk from "./images/bg.jpg"

// import logo1 from '../img/LOGO-removebg-preview.png'
const Contact = () => {
  const [state, setState] = useState({});
 
  const handler = (e) => {
    setState({ state, [e.target.name]: e.target.value });
  };
 
  const handler1 = (e) => {
   // e.preventDefault();
 
  };
 
  return (
    <div className='background1' id='cmr'>
     
      <div className='container1'>
 
      <div className='contact col-md-12'style={{paddingLeft:'50%'}} >
       
      <div className='Contact1 p-5' style={{paddingLeft:'50%'}}>
    <div style={{ textAlign: 'center', maxWidth: '600px', marginLeft: '30px' }} >
      <h2 style={{color:"black",fontSize:"30px"}}><span style={{color:"white"}}>Contact</span> <span style={{color:"white"}}>Us</span></h2>
 
      <form style={{ padding: '20px', border: '1px solid #ccc',  backgroundColor:"info" }} onSubmit={handler1}>
        <label style={{ display: 'block', marginBottom: '5px', color:"white" }}>Name:</label>
        <input
          type="text"
          name="name"
          placeholder='Enter your Name'
          value={state.name}
          onChange={handler}
          style={{ width: '100%',   marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', }}
         
        />
            <label style={{ display: 'block', marginBottom: '5px', color:"white" }}>Contact:</label>
        <input
          type="text"
          name="phone no"
          placeholder='Enter your Number'
          value={state.number}
          onChange={handler}
          style={{ width: '100%',  marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', }}
         
        />
        <label style={{ display: 'block', marginBottom: '5px', color:"white" }}>Email:</label>
        <input
          type="email"
          name="email"
          placeholder='Enter your Email'
          value={state.email}
          onChange={handler}
          style={{ width: '100%',   marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
        />
        <label style={{ display: 'block', marginBottom: '5px', color:"white" }}>Message:</label>
        <textarea
          name="message"
          placeholder='Enter message here'
          value={state.message}
          onChange={handler}
          style={{ width: '100%',   marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
         />
        <button style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit">Submit</button>
      </form>
    </div>
    </div>
    </div>
    </div> 
  </div>
   
   
 
   
   
  );
};
 
export default Contact;
