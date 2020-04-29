import React, { useEffect, useState } from "react";
import '../App.css';

import { ReviewContext } from "../contexts/ReviewContext";
import { axiosWithAuth } from "../utils/axiosAuth";
import ReviewCard from './ReviewCard';


const initalState = [
	{
		id: 2,
		strain: 'review off the chain', 
		stars: 5, 
		review: 'top shelf pain relief'
	},
	{
		id: 100,
		strain: 'headaches galore', 
		stars: 2, 
		review: 'a sample of this gave me a vice grip headache'
	}
]

const Review = () => {
	const [reviews, setReviews] = useState(initalState);
	// const { review, setReview } = useContext(ReviewContext);
	
	// useEffect(() => {
	// 	axiosWithAuth()
	// 		.get('/fav-reviews')
	// 		.then(response => {
	// 			console.log(response.data)
	// 			// TODO if data from server is correct, set the response to state
	// 			// setReviews(response.data);
	// 		})
	// 		.catch(error => {console.log(error)})
	// }, [])

	// TODO AddReview
	// const addReview = review => {
	// 	axiosWithAuth().post({/* api endpoint for adding new review here */})
	// 		.then(response => {
	// 			console.log(response)
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 		})
	// }


  return (
    <div style={{padding: '2%'}}>
			<h2 style={{margin: '2% 0', fontVariant: 'small-caps'}}>My Reviews</h2>
			{
				reviews.map(card => {
					// TODO add application provider instead of passing card via props
					return <ReviewCard key={card.id} card={card} />
				})
			}
			{/* 
					TODOs 
					- add server endpoint for users
					- apply state from Review to Application.Provider
					- add a button that allows user to post a new review
					- render reviewCard with Application.Provider wrapped around component
			*/}
			<button onClick={() => {console.log('Add review button clicked')}}>Add Review</button>
    </div>
  );
};

export default Review;
