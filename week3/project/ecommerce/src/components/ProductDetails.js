import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import Heart from './Heart';
import { GlobalContext } from '../context/GlobalState';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error(`Error fetching product details: ${error}`),
      );
  }, [id]);

  const { favorites, addFavorites, deleteFavorites } =
    useContext(GlobalContext);

  const isFavorite = favorites.includes(parseInt(id));
  const initialHeartState = isFavorite ? 'solid' : 'regular';

  const handleFavoriteClick = () => {
    if (isFavorite) {
      deleteFavorites(parseInt(id));
    } else {
      addFavorites(parseInt(id));
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <li className="product-item">
      <h1>{product.title}</h1>
      <div className="item-details">
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} />
        <Heart
          className="icon-details"
          handleFavoriteClick={handleFavoriteClick}
          initialHeartState={initialHeartState}
        />
      </div>
    </li>
  );
};
