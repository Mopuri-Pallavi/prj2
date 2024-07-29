import ReactDOM from 'react-dom';
var rupees = prompt("enter the rupees");
var dollar = prompt("enter the dollar");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h2 >Convert rupees to dollar is {rupees * 83.33}</h2>
    <h2>Convert dollar to rupees is {dollar * 0.012}</h2>
  </>
);