import React from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import About from './components/About';
import Service from './components/Services';
import Contact from './components/Contact';
 
export default function Router() {
  return (
    <>
      <h1>Main Page</h1>
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact us</Link>
      
        <Routes>
          <Route path='/' element={<h1>Home</h1>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          

        </Routes>
      </BrowserRouter>
    </>
  );
}