import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello MTE! 😊
        </p>
        <a
          className="App-link"
          href="https://www.egov.hu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by eGov
        </a>
      </header>
    </div>
  );
}

export default App;
