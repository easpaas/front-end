import React from 'react'
import styled from 'styled-components'

export const LoginFormDiv = styled.div`
    background-color: #EDFFEA
    
`

export default function LoginForm(props) {
    // leaving handlers for state change here
    const {
        values,
        onInputChange,
        onSubmit
    } = props

    return (
        <form className='form' id='login-form'>
            <p>Please sign in to coninue.</p>
            <h6>Email:</h6>
            <label>
                <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                />
            </label>
            <h6>Password:</h6>
            <label>
                <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                />
            </label>
            <button onClick={onSubmit}>Login</button>


        </form>
    )
}