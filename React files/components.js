import ReactDOM from 'react-dom/client'
function Comp(){
    return <h3>Hello components</h3>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1>Main app</h1>
        <Comp/>
        <Comp/>
        <Comp/>
        </>
);