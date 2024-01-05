import React, { useEffect, useState } from 'react';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';

export default function Heart({
  className,
  handleFavoriteClick,
  initialHeartState,
}) {
  const [heart, setHeart] = useState(
    initialHeartState === 'solid' ? heartSolid : heartRegular,
  );

  useEffect(() => {
    localStorage.setItem(
      'heartState',
      heart === heartSolid ? 'solid' : 'regular',
    );
  }, [heart]);

  const handleClick = () => {
    const newHeart = heart === heartRegular ? heartSolid : heartRegular;
    setHeart(newHeart);
    handleFavoriteClick();
  };

  return (
    <img
      className={className}
      src={heart}
      alt="Heart icon"
      onClick={handleClick}
    />
  );
}
