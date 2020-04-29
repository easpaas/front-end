import React from 'react'

export default function DetailsCard(props) {
    const {
        strain_image,
        description,
        strain_name,
        strain_type,
    } = props



    {/* waiting on input for details page design. I'm thinking...
when the user isn't signed in we can have a table on the api of dummy
data. Model the details page to load up the dummy data and only give 
the user access to the "real" data after log in. So all of the content
on this page will be URL generated.*/}

    return (
    <div className={'details container'}>
        <img src={strain_image}/>
    <h3>{strain_name} : {strain_type}</h3>

        <p>Details: {description}</p>

    </div>
    )
}