import React from 'react'

export default function Details(props) {
    const {
        imageurl,
        description,
        strain_name,
        strain_type,
    } = props



    {/* waiting on input for detaisl page design. I'm thinking...
when the user isn't signed in we can have a table on the api of dummy
data. Model the details page to load up the dummy data and only give 
the user access to the "real" data after log in. So all of the content
on this page will be URL generated.*/}

    return (
    <div className={'details container'}>
        <img src={imageurl}/>
    <h3>{strain_name} : {strain_type}</h3>

        <p>Details: {description}</p>

    </div>
    )
}