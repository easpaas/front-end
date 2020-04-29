import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth';

const UserProfile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('https://medcab3-strain.herokuapp.com/api/users/strains')
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      UserProfile...under construction
      {data.map(item => {
        return (
          <div key={item.id}>
            {/* strain_description: ""
            strain_flavor_profile: ""
            strain_image: ""
            strain_name: "13 Dawgs"
            strain_nearest_neighbors: ""
            strain_relief_profile: ""
            strain_review_key: ""
            strain_terpene_profile: ""
            strain_type: "" */}
            <p>{item.strain_name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default UserProfile;