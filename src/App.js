import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="helloworld">asd asd</h1>
        <div>
          <li>This is a test for my coding standards</li>
          <li>This is a test for my coding standards</li>
          <li>This is a test for my coding standards</li>
          <li>This is a test for my coding standards</li>
          <li>This is a test for my coding standards</li>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
