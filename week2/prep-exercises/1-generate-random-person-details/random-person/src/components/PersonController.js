import React, { useState, useEffect } from 'react';
import { Person } from './Person';

export const PersonController = () => {
  const [person, setPerson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = () => {
    fetch('https://www.randomuser.me/api?results=1')
      .then((response) => response.json())
      .then((data) => {
        setPerson(data.results[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching a person: ${error}`);
        setIsLoading(false);
      });
  };

  return (
    <>
      <div>
        {person !== null && !isLoading && (
          <Person
            person={{
              first_name: person.name.first,
              second_name: person.name.last,
              email: person.email,
            }}
          />
        )}
      </div>
      <button onClick={getPerson}>Get Person Data</button>
    </>
  );
};
