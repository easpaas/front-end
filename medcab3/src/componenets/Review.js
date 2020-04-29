import React from 'react';
import { ReviewContext } from '../contexts/ReviewContext';

const Review = () => {
    const { review, setReview } = useContext(ReviewContext)

    return (
        <div className="review">
            <img scr={review.strain_image} alt={`${review.strain_name} name`} />
            <h1>{review.strain_name}</h1>
            <p>{review.strain_description}</p>





        </div>

    )
}

export default Review;