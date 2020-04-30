import React from 'react';
import '../App.css';


const ReviewCard = ({card}) => {
  return (
    <div className="card">
        <h2>{card.strain}</h2>
      <div className="content">
        <h4>Rating: {card.stars} out of 5 stars{/* TODO add favicon of Star here if time permits */}</h4>
        <h4>Review: {card.review}</h4>
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default ReviewCard;