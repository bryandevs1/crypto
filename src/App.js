import logo from './logo.svg';
import './App.css';
import rate from './rate.jpg';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
      <img src={rate} alt='rate'/>
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-3xl'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src='./rate.jpg' alt='rate'/>
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
