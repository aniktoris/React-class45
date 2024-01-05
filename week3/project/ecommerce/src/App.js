import './App.css';
import { ProductDetails } from './components/ProductDetails';
import { Home } from './components/Home';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesList } from './components/FavoritesList';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
