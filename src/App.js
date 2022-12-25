import logoicon from './assets/logoicon.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoicon} className="App-logo" alt="logo" />
        <p>
          This is the lasing page to my lottery admin.
        </p>
      </header>
    </div>
  );
}

export default App;
