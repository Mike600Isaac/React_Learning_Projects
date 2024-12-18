import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome";
import Names from "./Names"
import Greetings from "./Greetings";
import Form from "./MyForm"

function App() {

  function handleClick() {
    return alert("I got clicked!");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <Names />
        <Greetings name="Milkysword"/>
        <Form />
        <button onClick={handleClick}>Click me</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
