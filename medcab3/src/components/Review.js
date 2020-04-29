import React, { useEffect, useState } from "react";
import { ReviewContext } from "../contexts/ReviewContext";
import { axiosWithAuth } from "../utils/axiosAuth";
import '../App.css';

const Review = () => {
	const [reviews, setReviews] = useState([]);
	// const { review, setReview } = useContext(ReviewContext);
	
	// useEffect(() => {
	// 	axiosWithAuth()
	// 	.get({/* TODO api endpoint for users goes here */})
	// 	.then(response => {
	// 		console.log(response.data)
	// 		// TODO if data from server is correct, set the response to state
	// 		// setReviews(response.data);
	// 	})
	// 	.catch(error => {console.log(error)})
	// }, [])

  return (
    <div>
      {/* <img scr={review.strain_image} alt={`${review.strain_name} name`} />
			<h1>{review.strain_name}</h1>
			<p>{review.strain_description}</p> */}
			<h2>My Reviews</h2>
			{/* 
					TODOs 
					- 
			*/}
    </div>
  );
};

export default Review;
