import React from 'react';
import '../App.css';


const ReviewCard = ({card}) => {
  return (
    <div className="card">
      <p>Review card under construction...</p>
      <div className="content">
        <h4>{card.strain}</h4>
        <h4>{card.rating} {/* TODO add favicon of Star here if time permits */}</h4>
        <h4>{card.review}</h4>
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default ReviewCard;