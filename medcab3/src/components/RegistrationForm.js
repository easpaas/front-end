import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosAuth'

// Declare inital state
const initalState = {
	name:'',
	email:'',
	password:'',
	ageCheckbox:{checked:false}
}

export default function RegistrationForm() {
    const [credentials, setCredentials] = useState(initalState)   
    
    const handleChange = e => {
			setCredentials({
				...credentials,
				[e.target.name]: e.target.value
			})
		}

		const onCheckboxChange = evt => {
			// calling this name in case we use the mail checkbox
			const {name} = evt.target
			const isChecked = evt.target.checked
			setCredentials({
				...credentials,
				[name]: isChecked
			})
		}
    
		const handleSubmit = evt => {
			evt.preventDefault()
			// TODO: axios POST registration endpoint
			console.log('inside submit for register form')
			// TODO reset form values
			setCredentials(initalState);
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
							checked={credentials.ageCheckbox}
							onChange={onCheckboxChange}
							name='ageCheckbox'
							type='checkbox'
					/>                
				</label>
				<button type="submit">Sign Up</button>
			</form>
		)
}