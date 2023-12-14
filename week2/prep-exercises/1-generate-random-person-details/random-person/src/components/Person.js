import React from 'react';

export const Person = ({ person }) => {
  return (
    <div>
      <ul>
        <li>First name: {person.first_name}</li>
        <li>Last name: {person.second_name}</li>
        <li>Email: {person.email}</li>
      </ul>
    </div>
  );
};
