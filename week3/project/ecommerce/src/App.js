import './App.css';
import { ProductsList } from './components/ProductsList';
import { CategoriesList } from './components/CategoriesList';
import { ProductDetails } from './components/ProductDetails';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getCategories();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getProducts(selectedCategory);
  }, [selectedCategory]);

  const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        setAllCategories(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching categories: ${error.message}`);
        setIsError(true);
      });
  };

  const getProducts = (selectedCategory) => {
    const endpoint = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : 'https://fakestoreapi.com/products';
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setOriginalProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching products: ${error}`);
        setIsError(true);
      });
  };

  const handleClick = (category) => {
    const filteredProducts = originalProducts.filter(
      (product) => category === `${product.category}`,
    );

    if (category === selectedCategory) {
      setSelectedCategory(null);
      setProducts(originalProducts);
    } else {
      setSelectedCategory(category);
      setProducts(filteredProducts);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <h1>Products</h1>
              </header>
              <main>
                <CategoriesList
                  categories={allCategories}
                  selectedCategory={selectedCategory}
                  handleClick={handleClick}
                />
                <div>
                  {isError ? (
                    'Failed to fetch data. Please try again later'
                  ) : isLoading ? (
                    'Loading...'
                  ) : (
                    <ProductsList products={products} />
                  )}
                </div>
              </main>
            </div>
          }
        />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
