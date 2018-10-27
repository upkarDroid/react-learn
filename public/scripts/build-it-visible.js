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
    title: "this is some react shit",
    options: [1, 2, 3, 4, 5, 6]
};

var getAddress = function getAddress(obj) {
    return obj.address ? React.createElement(
        "li",
        null,
        "address : ",
        obj.address
    ) : null;
};

var removeOptions = function removeOptions() {
    app.options.length = 0;
    render();
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.querySelector("input[name='add']").value;

    if (typeof option != "undefined") {
        app.options.push(option);
        e.target.querySelector("input[name='add']").value = "";
    }

    render();
};

var appRoot = document.getElementById("app");

var user = {
    name: "upkar",
    cities: ["bangalore", "mysore", "gurgaon"],
    printCities: function printCities() {
        var _this = this;

        this.cities.map(function (element) {
            console.log(_this.name + " has lived in " + element);
        });
    }
};

user.printCities();

var count = 0;
var incCount = function incCount() {
    count++;
    renderCounter();
};

var renderCounter = function renderCounter() {
    var counterTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Counter : ",
            count
        ),
        React.createElement(
            "button",
            { onClick: incCount },
            "+1"
        )
    );
    ReactDOM.render(counterTemplate, appRoot);
};

// renderCounter();

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        app.title && React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "p",
            null,
            app.options.length ? "Here are your options" : "no options available"
        ),
        React.createElement(
            "p",
            null,
            "total Options : ",
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: removeOptions },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (val, ind) {
                return React.createElement(
                    "li",
                    { key: ind },
                    val
                );
            })
        ),
        React.createElement(
            "p",
            null,
            "lorem ipsum"
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "add" }),
            React.createElement(
                "button",
                { type: "submit" },
                "Add"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
