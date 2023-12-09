import React from 'react';

function Guarantee({ img, title, description }) {
  return (
    <div>
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Guarantee;
