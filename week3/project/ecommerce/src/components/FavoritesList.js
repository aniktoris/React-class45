import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Navbar from './Navbar';
import { ProductItem } from './ProductItem';

export function FavoritesList() {
  const { favorites } = useContext(GlobalContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const fetches = favorites.map((favoriteId) =>
        fetch(`https://fakestoreapi.com/products/${favoriteId}`)
          .then((response) => response.json())
          .catch((error) => console.error(`Error fetching product ${error}`)),
      );

      const productData = await Promise.all(fetches);
      setFavoriteProducts(productData.filter((product) => product !== null));
    };

    if (favorites.length > 0) {
      fetchFavorites();
    }
  }, [favorites]);

  return (
    <>
      <header className="App-header">
        <h1>Favorites</h1>
        <Navbar />
      </header>
      <ul className="product-list">
        {favoriteProducts.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </ul>
    </>
  );
}
