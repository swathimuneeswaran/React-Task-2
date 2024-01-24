import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

function Card({ itemId, name, image, star, price, addToCart, isAdded }) {
  const starRating = parseInt(star, 10);
  const renderStars = () => {
    return Array.from({ length: starRating }, (_, index) => <span key={index}>⭐</span>);
  };

  return (
    <div className='col-4'>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={name} style={{ width: "17.7rem", height: "15rem" }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Ratings: {renderStars()}</p>
          <p className="card-text">Price: {price}</p>
          <button className={`btn btn-primary ${isAdded ? 'disabled' : ''}`} onClick={addToCart} disabled={isAdded}>
            {isAdded ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
