import ReactDOM from 'react-dom/client';
import App1 from './App1';
const p="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw401gAJJ2SSfhIO_H1Kagk0FMf-N_aGcLGg&s"
const root=ReactDOM.createRoot(document.getElementById('root'))
root .render(
  <>
  <App1 pic={p} price="15000"/>
  </>
)