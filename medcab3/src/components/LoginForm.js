import React from "react";
import { axiosWithAuth } from "../utils/axiosAuth";
import styled from "styled-components";

export const LoginFormDiv = styled.div`
  background-color: #edffea;
`;

export default function LoginForm() {
	const [credentials, setCredentials] = useState({
		username: "",
		password: ""
	});

  handleChange = e => {
		setCredentials({
			...credentials, 
			[e.target.name]: e.target.value
		})
    // this.setState({
    //   credentials: {
    //     ...this.state.credentials,
    //     [e.target.name]: e.target.value
    //   }
    // });
  };

  login = e => {
		e.preventDefault();
		console.log('inside submit for login')
  };

  return (
    <form onSubmit={login} className="form" id="login-form">
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
      <label>
        <input
          value={values.password}
          onChange={onInputChange}
          name="password"
          type="text"
        />
      </label>
			<button type="submit">Log in</button>
		</form>
  );
}