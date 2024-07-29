import ReactDOM from 'react-dom';
let message
let marks=prompt("Enter your marks")
if(marks<35){
  message="Your fail"
}else{
  message="your Pass"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1>if else</h1>
  <h2>{message}</h2>
  </>
);