import './App.css';
import { useWindowSize } from './components/UseWindowSize';
import { PersonByWindowSize } from './components/PersonByWindowSize';
import React from 'react';

function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="App">
      <header>Change screen size</header>
      <body>
        <div className="window-size">
          {width}px / {height}px
        </div>
        <div className="component">
          <PersonByWindowSize />
        </div>
      </body>
    </div>
  );
}

export default App;
