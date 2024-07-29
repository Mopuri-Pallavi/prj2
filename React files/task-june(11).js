import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Data from './info.json';
const w={
  width:"100%",
  height:"auto",
  margin:'auto'
}
 
export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        {Data.map((item, index) => (
          <div className="col-md-4">
            <div className="card">
              <img src={item.pic} className="card-img-top" alt={item.city} style={w} />
              <div className="card-body">
                <h5 className="card-title text-center">{item.city}</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
  );
}