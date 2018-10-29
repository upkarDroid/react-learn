console.log("app is runnning");

// var data = {
//     name:"upkar",
//     age:"30",
//     address:"bangalore"
// }

const data = {
    name:"ritu",
    age:"29",
    address:"pune"
}

const app={
    title:"this is some react shit",
    options:[1,2,3,4,5,6]
}

const getAddress = (obj) => {
    return obj.address ? <li>address : {obj.address}</li> : null;
}

const removeOptions = ()=>{
    app.options.length=0;
    render();
}
const onFormSubmit = (e)=>{
    e.preventDefault();
    let option = e.target.querySelector("input[name='add']").value;
    
    if(typeof option != "undefined"){
        app.options.push(option);
        e.target.querySelector("input[name='add']").value = "";
    }
    
    render();
}

const appRoot = document.getElementById("app");


const user = {
    name:"upkar",
    cities:["bangalore","mysore","gurgaon"],
    printCities(){
        this.cities.map(element => {
            console.log(this.name+" has lived in "+element);
        });
    }
}

user.printCities();

let count = 0;
const incCount = ()=>{
    count++;
    renderCounter();
    
}

const renderCounter = ()=>{
    const counterTemplate = (
        <div>
        <h1>Counter : {count}</h1>
        <button onClick={incCount}>+1</button>
        </div>
        );
        ReactDOM.render(counterTemplate,appRoot);
    }
    
    // renderCounter();
    
    const render = ()=>{
        const template = (
            <div>
            
            {app.title && <h1>{app.title}</h1>}
            <p>{app.options.length ? "Here are your options":"no options available"}</p>
            <p>total Options : {app.options.length}</p>
            <button onClick={removeOptions}>Remove All</button>
            {/* <ul>
                <li>UserName : {data.name}</li>
                <li>Age : {data.age}</li>
                {getAddress(data)}
            </ul> */}
            
            <ol>

            {app.options.map((val,ind)=><li key={ind}>{val}</li>)}
            {/* <li>Item1</li>
            <li>Item2</li> */}
            </ol>
            <p>lorem ipsum</p>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="add"/><button type="submit">Add</button>
            </form>
            </div>
            
            );
            
            ReactDOM.render(template,appRoot);
        }


        render();
        