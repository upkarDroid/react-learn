const appRoot = document.getElementById("app");




let toggelSwicth = false;


const toggleMe = ()=>{
    toggelSwicth = !toggelSwicth;
    render();
}


const render = ()=>{
    const template = (
        <div>
            <h1>visiblility playground</h1>
            <button onClick={toggleMe}>{toggelSwicth ? 'hide details' : 'show details'}</button>
            {toggelSwicth && <p>Details are now shown</p>}
        </div>
    );

    ReactDOM.render(template,appRoot);
}

render();