import React from 'react';

export const ProductItem = ({ product }) => {
  return (
    <li className="product-item">
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
    </li>
  );
};
