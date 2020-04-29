import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosAuth'

// Declare inital state
const initalState = {
	email: "",
	name: "",
	password: ""
}

export default function RegistrationForm() {
		const [credentials, setCredentials] = useState(initalState);
		const [isChecked, setIsChecked] = useState(false);
		const { push } = useHistory();
    
    const handleChange = e => {
			setCredentials({
				...credentials,
				[e.target.name]: e.target.value
			})
		}

		const onCheckboxChange = evt => {
			const {name} = evt.target
			const isChecked = evt.target.checked
			setIsChecked(true);
		}
    
		const handleSubmit = evt => {
			evt.preventDefault();
			axiosWithAuth()
      .post('api/auth/register', credentials)
      .then(res => {
					console.log(res.data)
		  	localStorage.setItem('token', JSON.stringify(res.data.payload));
					// push('/protected');
      })
			.catch(err => console.log({ err }));
			setCredentials(initalState);
			push('/protected');
		}

    return (
			<form onSubmit={handleSubmit} className="form" id="register-form">
				<p>Please fill out the form below.</p>
				<h6>Name:</h6>
				<label htmlFor="name">
					<input
							value={credentials.name}
							onChange={handleChange}
							name='name'
							type='text'
					/>
				</label>
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
				<p>"I verify that I am of legal age to view this content in my region."</p>
				<label htmlFor="checkbox">
					<input
							checked={isChecked}
							onChange={onCheckboxChange}
							name='ageCheckbox'
							type='checkbox'
					/>                
				</label>
				<button type="submit">Sign Up</button>
			</form>
		)
}