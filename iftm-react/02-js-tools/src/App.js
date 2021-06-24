import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Mix",
    }),
    React.createElement(Pet, {
      name: "Pimenta",
      animal: "Cat",
      breed: "Siamese",
    }),
    React.createElement(Pet, { name: "Pernalonga", animal: "Rabbit", breed: "Mix" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
