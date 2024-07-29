import ReactDOM from 'react-dom/client';
import App1 from './App1.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import pic from './images/baby doll.jpg'
import pic1 from './images/tom&jerry.jpg'
import pic2 from './images/teddy.jpg'
let a={
  color:"red"
}
let b={
  textAlign:'center',
  color:'green'
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root .render(
  <>
  <div className='container'>
    <div className='row'>
      <div className='col-md-4'>
        <App1 pic={pic} price='10000'/></div>
        <div className='col-md-4'>
        <App1 pic={pic1} price='13000'/></div>
        <div className='col-md-4'>
        <App1 pic={pic2} price='15000'/></div>
    </div>
  </div>
  </>
);