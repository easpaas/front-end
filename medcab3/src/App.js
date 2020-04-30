import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import PrivateRoute from "./components/PrivateRoute";
import DetailsCard from "./components/Details";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import UserProfile from "./components/UserProfile";
import ReviewForm from "./components/ReviewForm";

// API url will go here
const baseUrl = "https://medcab3-strain.herokuapp.com/";
const landingUrl = "api/auth/landing";

function App() {
  /* slice of state that can be used for search bar maybe
   cant think of a way to make a get request apart from having the DS
   team host some dummy data, since the point of the age verification 
   is to not return any details on actual data until age is confirmed. */
  const [details, setDetails] = useState([
    {
      strain_name: "",
      strain_type: "",
      description: ""
    }
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  
  
  useEffect(() => {
    getDetails();
    localStorage.getItem('token') &&
      setIsLoggedIn(true);
    localStorage.getItem('id') &&
      setUserId(localStorage.getItem('id'));
  }, [isLoggedIn, userId, details]);

  // useEffect(() => {
  //   localStorage.getItem('token') &&
  //   setIsLoggedIn(true)
  // }, [isLoggedIn])

  // useEffect(() => {
  //   localStorage.getItem('id') &&
  //   setUserId(localStorage.getItem('id'));
  //   console.log(userId);
  // }, [userId]);

  const getDetails = () => {
    axios
      .get(`${baseUrl}${landingUrl}`)
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  return (
    <div className="App">
      <Router>
        <div className="header">
          <a href="https://thepotcab.netlify.app/">Marketing</a>
          
          {/* Displays Register */}
          {
            !isLoggedIn &&
            <Link to="/Register">Register</Link>
          }

          {/* Displays 'Home' link */}
          {
            isLoggedIn &&
              <Link to={`/protected/${userId}`}>Home</Link>
          }

          {/* Displays login or logout links */}
          {
            isLoggedIn ? 
              <button className="button" onClick={() => localStorage.clear()}>Logout</button> :
                <Link to="/Login">Login</Link>
          }
        </div> 

        <Switch>
          <PrivateRoute exact path="/protected/:id" component={UserProfile} />
          {/* <ReviewContext.Provider value={{userId}}> */}
            <Route path="/update-review/:id"> 
              <ReviewForm userId={userId} />
            </Route>
          {/* </ReviewContext.Provider> */}
          <Route path="/Register" component={RegistrationForm} />
          <Route path="/Login" component={LoginForm} />
          <Route path="/">
            {details.map(card => {
              return (
                <DetailsCard
                  key={Math.floor(Math.random() * 200)}
                  card={card}
                />
              );
            })}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
