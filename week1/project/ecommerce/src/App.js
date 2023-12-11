import './App.css';
import { ProductsList } from './components/ProductsList';
import { CategoriesList } from './components/CategoriesList';
import allProducts from './fake-data/all-products';
import allCategories from './fake-data/all-categories';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState(allProducts);
  const [originalProducts, setOriginalProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setOriginalProducts(allProducts);
  }, []);

  const handleClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);

    const filteredProducts = originalProducts.filter(
      (product) => category === `FAKE: ${product.category}`,
    );

    setProducts(filteredProducts);
  };

  return (
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
        <ProductsList products={products} />
      </main>
    </div>
  );
}

export default App;
