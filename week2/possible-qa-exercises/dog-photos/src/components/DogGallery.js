import React, { useState } from 'react';
import { Button } from './Button';
import { DogPhoto } from './DogPhoto';

export const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        const newDogPhotos = [...dogPhotos];
        newDogPhotos.push(data.message);
        setDogPhotos(newDogPhotos);
      })
      .catch((error) => console.error(`Error during fetching: ${error}`));
  };
  return (
    <div>
      <Button fetching={getDogPhoto} />
      <ul className="list">
        {dogPhotos.map((dogPhoto, index) => (
          <li className="list-item">
            <DogPhoto key={index} photo={dogPhoto} />
          </li>
        ))}
      </ul>
    </div>
  );
};
