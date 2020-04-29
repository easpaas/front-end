import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosAuth";
import { useHistory } from "react-router-dom";

const initialState = {
  email: "",
  password: ""
};

export default function LoginForm() {
  const [credentials, setCredentials] = useState(initialState);
  const { push } = useHistory();

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = e => {
		e.preventDefault();
		
    axiosWithAuth()
      .post("api/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      })
			.catch(err => console.log({ err }));
			
		setCredentials(initialState);
		push("/protected");
  };

  return (
    <form onSubmit={handleLogin} className="form" id="login-form">
      <p>Please sign in to coninue.</p>
      <h6>Email:</h6>
      <label htmlFor="email">
        <input
          value={credentials.email}
          onChange={handleChange}
          name="email"
          type="text"
        />
      </label>
      <h6>Password:</h6>
      <label htmlFor="password">
        <input
          value={credentials.password}
          onChange={handleChange}
          name="password"
          type="text"
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
