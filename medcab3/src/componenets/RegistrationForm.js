import React from 'react'

export default function RegistrationForm(props) {
    // leaving handlers for state change here
    const {
        values,
        onInputChange,
        onCheckBoxChange,
        onSubmit
    } = props

    return (
        <form className='form' id='register-form'>
            <p>Please fill out the form below.</p>
            <h6>Email:</h6>
            <label>
                <input
                    value={values.email}
                    onInputChange={onInputChange}
                    name='email'
                    type='text'
                />
            </label>
            <h6>Name:</h6>
            <label>
                <input
                    value={values.name}
                    onInputChange={onInputChange}
                    name='name'
                    type='text'
                />
            </label>
            <h6>Password:</h6>
            <label>
                <input
                    value={values.password}
                    onInputChange={onInputChange}
                    name='password'
                    type='text'
                />
            </label>
            <h6>Username:</h6>
            <label>
                <input
                    checked={values.ageVerified}
                    onChange={onCheckBoxChange}
                    name='ageCheckbox'
                    type='checkbox'
                />
                <p>"I verify that I am of legal age to view this content in my region."</p>
            </label>
            <label>
                <input
                    checked={values.mail_list}
                    onChange={onCheckBoxChange}
                    name='mailing-list'
                    type='checkbox'
                />
                <p>"I am interested in receiving reccomendations via email."</p>
            </label>
            <button onClick={onSubmit}>Register</button>


        </form>
    )
}