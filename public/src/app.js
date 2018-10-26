console.log("app is runnning");

// var data = {
//     name:"upkar",
//     age:"30",
//     address:"bangalore"
// }

var data = {
    name:"ritu",
    age:"29",
    address:"pune"
}

var app={
    title:"this is some react shit"
}

function getAddress(obj) {
return obj.address ? <li>address : {obj.address}</li> : null;
}

var template = (
<div>

    {app.title && <h1>{app.title}</h1>}
    <ul>
    <li>UserName : {data.name}</li>
    <li>Age : {data.age}</li>
    {getAddress(data)}
    </ul>
    <p>lorem ipsum</p>
</div>
    
);
var appRoot = document.getElementById("app");

ReactDOM.render(template,appRoot);