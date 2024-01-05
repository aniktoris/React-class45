import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Heart from './Heart';
import { GlobalContext } from '../context/GlobalState';

export const ProductItem = ({ product }) => {
  const { favorites, addFavorites, deleteFavorites } =
    useContext(GlobalContext);

  const isFavorite = favorites.includes(product.id);
  const initialHeartState = isFavorite ? 'solid' : 'regular';

  const handleFavoriteClick = () => {
    if (isFavorite) {
      deleteFavorites(product.id);
    } else {
      addFavorites(product.id);
    }
  };

  return (
    <li className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <p>{product.title}</p>
      </Link>
      <Heart
        className="icon"
        handleFavoriteClick={handleFavoriteClick}
        initialHeartState={initialHeartState}
      />
    </li>
  );
};
