import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'

import Details from './components/Details'
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { axiosWithAuth } from './utils/axiosAuth';

// API url will go here
const baseUrl = 'https://medcab3-strain.herokuapp.com/'
const landingUrl = 'api/auth/landing'

function App() {
  /* slice of state that can be used for search bar maybe
   cant think of a way to make a get request apart from having the DS
   team host some dummy data, since the point of the age verification 
   is to not return any details on actual data until age is confirmed. */

  const [details, setDetails] = useState({
    strain_name:"",
    strain_type:"",
    description:""
  })

  const getDetails = () => {
    axios.get(`${baseUrl}${landingUrl}`)
    .then(res => {
      setDetails(res.data[0])
    })
    .catch(err => {
      console.log(err)
    })}
    useEffect(()=> {
    getDetails()
    },[])
  
  return (
    <div className="App">

      {/* adding a nav bar just for testing */}
      <header>
        <Link to='/Login'><button>Login</button></Link>
        <Link to='/Register'><button>Register</button></Link>
        <Link to='/'><button>Home</button></Link>
      </header>

        <Route path='/Login'>
          <LoginForm />
        </Route>
        <Route path='/Register'>
          <RegistrationForm />
        </Route>

        {/* more specific switch paths above */}        
        <Route path='/'>
          <Details
          // prop names match dataset names
          strain_image={details.strain_image}
          description={details.description}
          strain_name={details.strain_name}
          strain_type={details.strain_type}          
          />
        </Route>
    </div>
  );
}

export default App;
