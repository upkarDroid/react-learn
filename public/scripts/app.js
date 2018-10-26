"use strict";

console.log("app is runnning");

// var data = {
//     name:"upkar",
//     age:"30",
//     address:"bangalore"
// }

var data = {
    name: "ritu",
    age: "29",
    address: "pune"
};

var app = {
    title: "this is some react shit"
};

function getAddress(obj) {
    return obj.address ? React.createElement(
        "li",
        null,
        "address : ",
        obj.address
    ) : null;
}

var template = React.createElement(
    "div",
    null,
    app.title && React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "UserName : ",
            data.name
        ),
        React.createElement(
            "li",
            null,
            "Age : ",
            data.age
        ),
        getAddress(data)
    ),
    React.createElement(
        "p",
        null,
        "lorem ipsum"
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
