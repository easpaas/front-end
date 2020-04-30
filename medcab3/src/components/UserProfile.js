import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import '../App.css';

import Review from './Reviews';
import { axiosWithAuth } from '../utils/axiosAuth';

const UserProfile = () => {
  const params = useParams();
  const [userId, setUserId] = useState(params.id);
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('api/users/strains')
      .then(response => setStrains(response.data))
      .catch(error => {console.log(error)})
  }, [])

  return (
    <div className="profile">
      <div className="strains">
        <h2>Current Strains</h2>
        {
          strains.map(strain => {
            return (
              <p key={strain.id}>{strain.strain_name}</p>
            )
          })
        }
      </div>
      <div className="reviews">
        <Review userId={userId} />
      </div>
    </div>
  );
}

export default UserProfile;