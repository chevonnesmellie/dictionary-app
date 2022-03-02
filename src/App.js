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
        Coded by <a href="https://awesome-meitner-96a405.netlify.app/" target="_blank" rel="noreferrer" className="contact-links">Chevonne Smellie</a> and is <a href ="https://github.com/chevonnesmellie/dictionary-app" target="_blank" rel="noreferrer" className="contact-links">open-sourced on GitHub</a>.
      </footer>
    </div>
  );
}

export default App;
