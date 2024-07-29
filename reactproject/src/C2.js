import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//sconst s = "https://th.bing.com/th/id/OIP.sQ7-hPlJ-OtweBqEhh6d7wHaHa?pid=ImgDet&w=188&h=188&c=7";
import s from './images/pic on workoout.png'
 
export default function Comp2() {
    return (
        <>
                <div className="container">
                <div className="row align-items-center mt-15 ">
                    <div className="col-md-6 ">
                        <h1>WORKOUTS MADE</h1>
                        <h1><span className="text-success">EXCLUSIVE</span> FOR YOU!</h1>
                        <p>Gold's Gym is a globally <b> renowned fitness</b> brand that has made its mark in India.Invest ur body <b>get more performance</b>and quality of life,,unique works also get worried</p>
                        {/* <input type="button" value="Start More" style={{ color: 'green' }}/> */}
                        <input type="button" value="Start More" className="btn btn-success" style={{padding:'15'}}/>
                    </div> 
                    {/* <div className='col-md-2'></div> */} 
                    <div className="col-md-6"> 
                        <img src={s} style={{ height: '600px' }} alt='' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h5>send us a message <strong>@treine.me</strong></h5>
 
                    </div>
 
                </div>
            </div>
        </>
    );
}