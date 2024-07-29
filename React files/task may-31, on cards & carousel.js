import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import pic from './images/mouritech logo.webp'
import pic1 from './images/image2.jpg'
import pic2 from './images/pallavi logo.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div className="bg-primary">
            <nav className="navbar navbar-expand-md bg-danger">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={pic} alt="Logo" /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item p-4">
                                <a className="nav-link" href="about.html"> Home</a>
                            </li>
                            <li className="nav-item p-4">
                                <a className="nav-link" href="services.html">Features</a>
                            </li>
                            <li className="nav-item p-4">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown p-4">
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-2 bg-secondary">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={pic1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={pic1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={pic1} className="d-block w-100" alt="..." />
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
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={pic2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Pallavi</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-success">Click here</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={pic2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Pallavi</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-success">Click here</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={pic2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Pallavi</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-success">Click here</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 p-3 bg-dark text-light text-center">Pallavi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);