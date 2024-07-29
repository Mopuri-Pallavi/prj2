import React from 'react';
import pic from './images/pallavi logo.jpg'; 
export default function Cards() {
  return (<>
          <div className="col-md-4">
            <div className="card">
              <img src={pic} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Click here</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={pic} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Click here</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={pic} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Click here</a>
              </div>
            </div>
          </div>
          </>
  );
}