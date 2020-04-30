import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosAuth";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

const initialState = {
  email: "",
  password: ""
};

// form errors and disabled section
const initialFormErrors = {
  email: "",
  password: ""
};

// validation schema
const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("a valid email address is required.")
    .required("a valid email address is required."),
  password: yup
    .string()
    .min(2, "Password must be at least 2 characters long.")
    .max(16, "Password can be no more than 16 characters long.")
    .required("Password is required.")
});

export default function LoginForm() {
  const [credentials, setCredentials] = useState(initialState);
  const { push } = useHistory();
  const [formDisabled, setFormDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  useEffect(() => {
    formSchema.isValid(credentials).then(
      valid => {
        setFormDisabled(!valid);
      },
      [credentials]
    );
  }, [credentials]);

  const handleChange = e => {
    // pulling e.target.name and e.target.value before yup
    const name = e.target.name;
    const value = e.target.value;
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
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
        console.log(res.data);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem('id', JSON.stringify(res.data.user.id));
				setCredentials(initialState);
        push(`/protected/${res.data.user.id}`);
      })
      .catch(err => console.log({ err }));
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
      <button type="submit" disabled={formDisabled}>
        Log in
      </button>
    </form>
  );
}
