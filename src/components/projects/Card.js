import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
