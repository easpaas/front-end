import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import * as yup from 'yup'
import {axiosWithAuth} from '../utils/axiosAuth'

// Declare inital state
const initalState = {
	name:'',
	email:'',
	password:'',
	ageCheckbox:false
}

// form errors
const initialFormErrors = {
	name:"",
	email:"",
	password:"",
	ageCheckbox:""
}

// validation schema
const formSchema = yup.object().shape({
	name: yup
		.string()
		.required('Name is required.'),
	email: yup
		.string()
		.email('a valid email address is required.')
		.required('a valid email address is required.'),
	password: yup
		.string()
		.min(8, "Password must be at least 8 characters long.")
		.max(16, "Password can be no more than 16 characters long.")
		.required('Password is required.'),
	ageCheckbox: yup
		.boolean()
		.oneOf([true], 'You must be of age to create an account.')
})

const tempToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkZveCBNdWxkZXIiLCJpYXQiOjE1MTYyMzkwMjJ9.7DF4KshLB0cw9RDG3WHV6B25gE1sZ2zBkvFotCpXQfA";

export default function RegistrationForm() {
		const [credentials, setCredentials] = useState(initalState);
		const { push } = useHistory();
		const [formDisabled, setFormDisabled] = useState(true)
		const [formErrors, setFormErrors] = useState(initialFormErrors)
		
    
    const handleChange = e => {

		const name = e.target.name
	  	const value = e.target.value

	  yup
		  .reach(formSchema, name)
		  .validate(value)
		  .then(valid => {
			  setFormErrors({
				  ...formErrors,
				  [name]: "",
			  })
		  })
		  .catch(err => {
			  setFormErrors({
				  ...formErrors,
				  [name]: err.errors[0]
			  })
		  })

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
			evt.preventDefault();
			localStorage.setItem('token', JSON.stringify(tempToken));
			localStorage.setItem('credentials', JSON.stringify(credentials));
		// 	axiosWithAuth()
    //   .post('api/auth/register', credentials)
    //   .then(res => {
		// 			console.log(res.data)
		//    	localStorage.setItem('token', JSON.stringify(res.data.payload));
		// 			push('/protected');
    //   })
		// 	.catch(err => console.log({ err }));
			setCredentials(initalState);
			push('/protected');
		}
		useEffect(() => {
			formSchema.isValid(credentials)
			.then(valid => {
				setFormDisabled(!valid)
			},[credentials])
		})

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
				<button type="submit" disabled={formDisabled}>Sign Up</button>
			</form>
		)
}