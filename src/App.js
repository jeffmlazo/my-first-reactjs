// import logo from "./logo.svg";
// import "./App.css";

import Header from "./components/Header";

function App() {
  const name = "Jeprox";
  const x = true;
  // const x = false;

  return (
    <div className="App">
      <h1 className="name">Hi My Name is {name}</h1>
      <div>
        <h2>Auto Computation</h2>
        <p>One Plus One = {1 + 1}</p>
        <p>Two Times Two = {2 * 2}</p>
        <p>Four Divided By Four = {4 / 4}</p>
        <p>Six Minus One = {6 - 1}</p>
        <p>Ternary operator {x ? "Truelala" : "Falselala"}</p>
      </div>

      <h2>This is a component from the Header component</h2>
      {/* <Header titulo="Pass Titulo" /> */}
      <Header />
    </div>
  );
}

export default App;
