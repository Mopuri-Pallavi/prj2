import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from './images/a2.jpg'
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <h2 className='text-danger'>Bootstrap</h2>
  <button className='btn btn-success'>click me</button>
  <img src={pic} alt="" className='img-fluid'/>
  </>
)