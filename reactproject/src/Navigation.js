import React from 'react';
import pic from './images/mouritech logo.webp';
 
export default function Navigation() {
  return (
    <div className='col-md-12'>
      <div className="bg-secondary">
        <nav className="navbar navbar-expand-md bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={pic} alt="Logo" width={100} height={100}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/about">Home</a> {/* Changed href to a proper path */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">Features</a> {/* Changed href to a proper path */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pricing">Pricing</a> {/* Changed href to a proper path */}
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
 