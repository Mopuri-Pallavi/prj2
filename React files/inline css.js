import ReactDOM from 'react-dom';
import pic from './images/a2.jpg';
 
const color = {
  color: 'blue'
};
 
const p = {
  width: '300px',
  border: '3px solid red'
};
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 style={{color: 'red'}}>CSSc</h1>
    <br/>
    <h2 style={color}>Another Method</h2>
    <img src={pic} alt='' style={p} />
    <br/>
    <img src='logo192.png' alt='' />
  </>
);