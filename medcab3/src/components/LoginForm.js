import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosAuth";
// import styled from "styled-components";

// export const LoginFormDiv = styled.div`
//   background-color: #edffea;
// `;
const initialState = {
	email: "",
	password: ""
};

export default function LoginForm() {
	const [credentials, setCredentials] = useState(initialState);

  const handleChange = e => {
		setCredentials({
			...credentials, 
			[e.target.name]: e.target.value
		})
  };

  const handleLogin = e => {
		e.preventDefault();
		// TODO axios post for token to save to storage
		console.log('inside submit for login')
		// TODO reset form
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