import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <li className="product-item">
      <h1>{product.title}</h1>
      <div className='item-details'>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      </div>
    </li>
  );
};
