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
            
            <label><h6>Email:</h6>
                <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                />
            </label>
            
            <label><h6>Name:</h6>
                <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                />
            </label>
            
            <label><h6>Password:</h6>
                <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                />
            </label>
            
            {/* <label><h6>Username:</h6><input
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text'
                />
            </label> */}
            
            <label><p>"I verify that I am of legal age to view this content in my region."</p>
                <input
                    checked={values.ageVerified}
                    onChange={onCheckBoxChange}
                    name='ageCheckbox'
                    type='checkbox'
                    
                />                
            </label>
            {/* 

                this wasn't discussed in our call. Might be good functionality to add so that the ML team's recommendations can be used in some way. IDK.

            <label>
                <input
                    checked={values.mail_list}
                    onChange={onCheckBoxChange}
                    name='mailing-list'
                    type='checkbox'
                />
                <p>"I am interested in receiving reccomendations via email."</p>
            </label> 
            */}
            <button onClick={onSubmit}>Register</button>


        </form>
    )
}