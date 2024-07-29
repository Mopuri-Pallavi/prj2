import ReactDOM from 'react-dom';
let name = prompt("Enter the name");
let place = prompt("Enter the place");
let email = prompt("Enter the email");
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <table border={2}>
      <tr>
        <td>Name:</td>
        <td>Place:</td>
       <td>Email:</td>
       
      </tr>
      <tr>
       <td>{name}</td>
        <td>{place}</td>
        <td>{email}</td>
      </tr>
    </table>
  </>
);