import React from "react";
import ReactDOM from 'react-dom/client';
import pic from './images/a2.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <div className="container-fluid">
 <div class="row">
 <div className="bg-secondary col-md-6">
 <h2 className="text-danger">Bootstrap</h2>
 <button className="btn btn-success">click me</button>  </div>
 
 <div className="bg-danger col-md-6">
  <p> A React developer is responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library. They develop and maintain UIs for web and mobile apps. </p></div>  </div>  
 
  <div class="row">
<div className="bg-warning col-md-4">
  <h2> HEADING </h2>
  <p> A React developer is responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library. They develop and maintain UIs for web and mobile apps. </p>
</div>
 
<div className="bg-success col-md-4">
  <h2> HEADING </h2>
  <p> A React developer is responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library. They develop and maintain UIs for web and mobile apps. </p>
</div>
 
<div className="bg-secondary col-md-4">
 <img src={pic} alt="" className="img-fluid"/></div> </div>
 
 <div class="row">
 <div className="footer col-md-12 bg-primary">
   <h4>copy right </h4>
 </div> </div>
 
 </div>
  </>
)