import logo from './logo.svg';
import './App.css';

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App">
        <img src={logo} className="img-fluid" alt="logo" />
        <h1>Dictionary</h1>
      </header>
      <Dictionary /> 
      <footer>
        Coded by Chevonne Smellie and is open-sourced on GitHub.
      </footer>
    </div>
  );
}

export default App;
