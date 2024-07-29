import React from 'react'
import pic1 from './images/banner image.jpg';
import pic2 from './images/banner image.jpg';
import pic3 from './images/banner image.jpg';
export default function Carsuoel() {
  return (
    <div className='col-md-12'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-2 bg-secondary">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={pic3} className="card-img-top" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={pic1} className="card-img-top" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={pic2} className="card-img-top" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 