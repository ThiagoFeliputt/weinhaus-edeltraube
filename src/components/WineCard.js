// components/WineCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WineCard.css';

const WineCard = ({ wine }) => {
  return (
    <div className="wine-card">
      <Link to={`/wine/${wine.id}`}>
        <div className="wine-card-image">
          <img src={wine.image} alt={wine.name} />
        </div>
        <div className="wine-card-info">
          <h3>{wine.name}</h3>
          <p>{wine.producer}</p>
          <div className="wine-card-meta">
            <span>{wine.country}</span>
            <span>{wine.region}</span>
            <span>{wine.type}</span>
          </div>
          <p className="wine-price">{wine.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default WineCard;