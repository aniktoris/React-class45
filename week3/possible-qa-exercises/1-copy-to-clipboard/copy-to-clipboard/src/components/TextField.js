import React from 'react';

export const TextField = ({ value, handleChange }) => {
  return <input value={value} type="text" onChange={handleChange}></input>;
};
