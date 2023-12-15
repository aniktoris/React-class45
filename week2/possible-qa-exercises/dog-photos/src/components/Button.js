import React from 'react';

export const Button = ({ fetching }) => {
  return <button onClick={fetching}>Get a dog!</button>;
};
