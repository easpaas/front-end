import React from 'react';
import {useHistory} from 'react-router-dom';
import '../App.css';
import { axiosWithAuth } from '../utils/axiosAuth';
import ReviewForm from './ReviewForm';


const ReviewCard = ({card, userId}) => {
  const { push } = useHistory();

  const handleDelete = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/users/${userId}/fav-reviews/${card.id}`)
      .then((res) => {console.log(res)})
      .catch(err => console.log(err));
  };

  return (
    <div className="card">
        <h2>{card.strain}</h2>
      <div className="content">
        <h4>Rating: {card.stars} out of 5 stars{/* TODO add favicon of Star here if time permits */}</h4>
        <h4>Review: {card.review}</h4>
      </div>
      <button onClick={() => {
          push(`/update-review/${userId}`);
        }}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ReviewCard;