import './App.css';
import { PersonController } from './components/PersonController';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <PersonController />
        <PersonController />
        <PersonController />
        <PersonController />
        <PersonController />
      </div>
    </div>
  );
}

export default App;
