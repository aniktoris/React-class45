import './App.css';
import { TextField } from './components/TextField';
import { Button } from './components/Button';
import { useState } from 'react';
import { useCopy } from './hooks/useCopy';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [handleCopy, copySuccess, resetCopyStatus] = useCopy();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    resetCopyStatus();
  };

  const handleCopyClick = (e) => {
    handleCopy(inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">Copy to clipboard</header>
      <main>
        <TextField value={inputValue} handleChange={handleInputChange} />
        <Button handleCopy={handleCopyClick} />
        {copySuccess && <div>Text copied to clipboard: {inputValue}</div>}
      </main>
    </div>
  );
}

export default App;
