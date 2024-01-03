import React from 'react';
import { Link } from 'react-router-dom';

export const ProductItem = ({ product }) => {
  return (
    <li className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <p>{product.title}</p>
      </Link>
    </li>
  );
};
