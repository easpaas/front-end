import React, { useState } from 'react';

const ChangeReview = () => {
    const [addReview, setAddReview] = useState('');
    // const [editReview, setEditReview] = useState();

    const addNewReview = e => {
        setAddReview(e.target.value)
    }




    return (
        <form>
            <label>Add Review</label>
            <br />
            <input type='text'
                name='name'
                value={addReview}
                onChange={addNewReview}
            />
            <button>Add</button>
            <button>Edit</button>
            <button>Delete</button>
        </form>
    )
}

export default ChangeReview;