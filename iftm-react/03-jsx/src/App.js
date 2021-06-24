import { render } from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Mel",
//       animal: "Dog",
//       breed: "Chow Chow",
//     }),
//     React.createElement(Pet, {
//       name: "Pimenta",
//       animal: "Bird",
//       breed: "Papagaio",
//     }),
//     React.createElement(Pet, { name: "Slash", animal: "Cat", breed: "Mix" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Mel" animal="Dog" breed="Chow Chow" />
      <Pet name="Pimenta" animal="Bird" breed="Papagaio" />
      <Pet name="Slash" animal="Cat" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
