import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductsList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ul>
  );
};
