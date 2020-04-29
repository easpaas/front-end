import React from 'react';
import '../App.css';


const ReviewCard = ({card}) => {
  return (
    <div className="card">
      <p>Review card under construction...</p>
      <div className="content">
        <h4>Strain: {card.strain}</h4>
        <h4>Rating: {card.stars} star rating {/* TODO add favicon of Star here if time permits */}</h4>
        <h4>Review: {card.review}</h4>
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default ReviewCard;