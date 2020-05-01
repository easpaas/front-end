import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import { useParams } from 'react-router-dom';

import { ReviewContext } from "../contexts/review";
import { axiosWithAuth } from "../utils/axiosAuth";
import ReviewCard from "./ReviewCard";

const reviewData = {
  strain: "",
  stars: 0,
  review: ""
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [addingReview, setAddingReview] = useState(false);
  const [review, setReview] = useState(reviewData);
  const { id } = useParams();

  const { userId } = useContext(ReviewContext);


  useEffect(() => {
    axiosWithAuth()
      .get(`api/users/${userId}/fav-reviews`)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [userId]);

  const handleChange = e => {
    setReview({
      ...review,
      [e.target.name]: e.target.value
    });
  };

  const handleAddSubmit = e => {
    e.preventDefault();
    setReview(reviewData);
    setAddingReview(false);

    axiosWithAuth()
      .post(
        `https://medcab3-strain.herokuapp.com/api/users/${userId}/fav-reviews`,
        review
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div style={{ padding: "2%" }}>
      <h2 style={{ margin: "2% 0", fontVariant: "small-caps" }}>My Reviews</h2>
      <button onClick={() => setAddingReview(true)}>Add Review</button>
      {addingReview && (
        <div
          style={{
            border: "4px solid",
            display: "flex",
            padding: "1.5%",
            flexDirection: "column"
          }}
        >
          <form onSubmit={handleAddSubmit}>
            <label htmlFor="strain">
              Strain:
              <input
                type="text"
                name="strain"
                onChange={handleChange}
                placeholder="strain"
              />
            </label>
            <label htmlFor="stars">
              Stars:
              <input
                type="number"
                name="stars"
                onChange={handleChange}
                placeholder="stars"
              />
            </label>
            <label htmlFor="review">
              Review:
              <input
                type="text"
                name="review"
                onChange={handleChange}
                placeholder="review"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <div className="reviews">
        {
          reviews.length === 0 ?
            <p style={{ color: 'red' }}>You have not added any reviews.</p> :
            reviews.map(card => {
              return <ReviewCard key={card.id} card={card} />;
            })
        }
      </div>
    </div>
  );
};

export default Reviews;
