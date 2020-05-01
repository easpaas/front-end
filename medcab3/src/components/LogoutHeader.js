import React  from "react";
import {Link, useHistory} from 'react-router-dom';
import '../App.css';

export const LogoutHeader = ({userId, setIsLoggedIn}) => {
  const { push } = useHistory();


  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    push("/login");
  }  

  return (
    <div className="header">
      <a href="https://thepotcab.netlify.app/">Marketing</a>
      <Link to={`/protected/${userId}`}>Home</Link>
      <button className="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
