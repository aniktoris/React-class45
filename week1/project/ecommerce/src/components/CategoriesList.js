import React from 'react';
import { CategoryItem } from './CategoryItem';

export const CategoriesList = ({
  categories,
  handleClick,
  selectedCategory,
}) => {
  return (
    <ul className="list">
      {categories.map((category, index) => {
        return (
          <CategoryItem
            key={index}
            category={category}
            handleClick={handleClick}
            selectedCategory={selectedCategory}
          />
        );
      })}
    </ul>
  );
};
