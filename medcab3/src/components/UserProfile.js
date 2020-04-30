import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import '../App.css';

import Review from './Review';
import { axiosWithAuth } from '../utils/axiosAuth';

const UserProfile = () => {
  const params = useParams();
  const [userId, setUserId] = useState(params.id);
  const [strains, setStrains] = useState([]);

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get('api/users/strains')
  //     .then(response => {console.log(response)})
  //     .catch(error => {console.log(error)})
  // }, [])

  return (
    <div className="profile">
      <p>UserProfile...under construction</p>
      <div className="strains">
        {
          console.log(strains)
        }
      </div>
      <div className="reviews">
        <Review userId={userId} />
      </div>
    </div>
  );
}

export default UserProfile;