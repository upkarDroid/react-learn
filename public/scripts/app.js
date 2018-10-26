"use strict";

console.log("app is runnning");

var template = React.createElement(
  "h1",
  null,
  "this is runnig the react now! wohoooooo "
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
