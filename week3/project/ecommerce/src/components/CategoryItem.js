import React from 'react';

export const CategoryItem = ({ category, handleClick, selectedCategory }) => {
  return (
    <li
      className={`item ${selectedCategory === category ? 'clicked' : ''}`}
      onClick={() => handleClick(category)}
    >
      {category}
    </li>
  );
};
