import React from "react";
import ReactDOM from "react-dom";

const name = "Neha";
const currentDate = new Date();
const year = currentDate.getFullYear();
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">Hello World!</h1>
    <h2>My favourite fruits </h2>
    <ul>
      <li>Mango</li>
      <li>Strawberry</li>
      <li>Grapes</li>
    </ul>
    <img src={img}  alt="A Random" />
    <p>Created by {name} </p>
    <p>Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
