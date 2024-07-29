import ReactDOM from 'react-dom';
let obj=new Date()
let h=obj.getHours()
let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {Date()}
    <h2>{h}</h2>
    </>
)