import './App.css';
import { ProductDetails } from './components/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
