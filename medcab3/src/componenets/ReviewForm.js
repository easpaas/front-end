import React, { useContext } from 'react';
import ChangeReview from './ChangeReview';
import { ReviewContext } from '../contexts/ReviewContext';

const ReviewForm = () => {
    const { review } = useContext(ReviewContext)

    return (
        <div>
            {review.map(item => (
                <form>
                    <h2>{item.strain_name}</h2>
                    <h2>{item.strain_description}</h2>
                    <h2>{item.strain_frangrance_profile}</h2>
                    <ChangeReview />
                </form>
            ))
            }
        </div>
    );
}

export default ReviewForm;