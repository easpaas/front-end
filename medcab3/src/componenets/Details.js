import React from 'react'

export default function Details(props) {
    const {
        image,
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
        <img />
        <p>Details: Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. Make a quick pipe out of an apple and release the carb Purple Haze all around. Pass the duchie Bob Marley this shatter is hella potent. OG grandaddy purps with notes of diesel. Rasta!

Optimizing dime bags of pre-rolled honey oil dabs. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Guatemalan purple haze grown outdoors by ganja shaman. Legalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons.

</p>
    </div>
    )
}