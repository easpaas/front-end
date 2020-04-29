import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import PrivateRoute from './components/PrivateRoute';
import Details from './components/Details';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

// API url will go here
const baseUrl = 'https://medcab3-strain.herokuapp.com/'

// for now, Im making a lorum ipsum data object for me to render to the DOM, we can tweak it to look like the data we get from the DS Team, and hopefully get them to set up a table of funny, dummy, strains (My favorite idea so far is gysahl greens)
const defaultDetails = {
  strain_image:'#',
  strain_name:'Gysahl Greens',
  strain_type:'Sativa',
  strain_fragrance_profile:'Smells strongly of wild onion',
  strain_description:'Fully man, keif gummies are the indoor equivalent of body high super mellow. Make a quick pipe out of an apple and release the carb Purple Haze all around. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Guatemalan purple haze grown outdoors by ganja shaman.',
  // Mybe more data points for what it treats? 
}

function App() {
  /* slice of state that can be used for search bar maybe
   cant think of a way to make a get request apart from having the DS
   team host some dummy data, since the point of the age verification 
   is to not return any details on actual data until age is confirmed.


  REMINDER: ask about testing database functionality with a search bar. required?

   const [details, setDetails] = useState(defaultDetails) */
  
  return (
    <div className="App">
      <Router>

      {/* adding a nav bar just for testing */}
      <div className="header">
        <Link to="/">Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Register'>Register</Link>
      </div>

        {/* <Route exact path='/Register'>
          <RegistrationForm />
        </Route> */}

      <Switch>
        <PrivateRoute exact path="/protected" component={Details} />
        <Route path="/Register" component={RegistrationForm} />
        <Route path='/Login' component={LoginForm} />
        {/* <Route component={LoginForm} /> */}
      </Switch>

      {/* more specific switch paths above */}        
      {/* <Route path='/'>
        <Details 
        image={defaultDetails.imageurl}
        description={defaultDetails.description}
        strain_name={defaultDetails.strain_name}
        strain_type={defaultDetails.strain_type}          
        />
      </Route> */}
      </Router>
    </div>
  );
}

export default App;
