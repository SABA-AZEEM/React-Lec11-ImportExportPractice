import React from "react";
import ReactDOM from "react-dom";
import * as data from "./calculator.js";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png
console.log(data);
ReactDOM.render(
  <ul>
    <li>{data.add(1, 2)}</li>
    <li>{data.multiply(2, 3)}</li>
    <li>{data.subtract(7, 2)}</li>
    <li>{data.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
