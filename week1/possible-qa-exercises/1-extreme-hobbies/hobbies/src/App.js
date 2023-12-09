import './App.css';
import HobbyList from './components/HobbyList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>My Hobbies</h1>
          <HobbyList />
        </p>
      </header>
    </div>
  );
}

export default App;
