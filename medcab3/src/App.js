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
import {LogoutHeader} from "./components/LogoutHeader";
import { ReviewContext } from "./contexts/review";
import { LoginContext } from "./contexts/login";


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

  const loginStatus = () => {
    localStorage.getItem('token') &&
    setIsLoggedIn(true);
  }

  useEffect(() => {
    getDetails();
    loginStatus();
    localStorage.getItem('id') &&
      setUserId(localStorage.getItem('id'));
  }, [isLoggedIn, userId]);
  
  return (
    <div className="App">
      <Router>
        {/* Login status will determine which header to render */}
        {
          !isLoggedIn ? 
            <div className="header">
              <img src="/assets/logo.png" alt="Medicine Cabinet Logo" />
              <a href="https://thepotcab.netlify.app/">Marketing</a>
              <Link to="/Register">Register</Link>
              <Link to="/Login">Login</Link>
            </div> 
          :
            <LogoutHeader 
              userId={userId}
              setIsLoggedIn={setIsLoggedIn}
            />
        }

        <div className="title-container">
          <div className="title-content">
            <h3>Making the transition from pharmaceuticals to cannabis painless.</h3>
            <h1>Welcome to Medicine Cabinet!</h1>
          </div>
        </div>

        <Switch>
          <PrivateRoute exact path="/protected/:id" component={UserProfile} />
          {/* <ReviewContext.Provider value={{userId}}> */}
            <Route path="/update-review/:id"> 
              <ReviewForm userId={userId} />
            </Route>
          {/* </ReviewContext.Provider> */}
          <Route path="/Register" component={RegistrationForm} />
          <LoginContext.Provider value={{setIsLoggedIn}}>
            <Route path="/Login" component={LoginForm} />
          </LoginContext.Provider>
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
