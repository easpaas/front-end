import React from 'react'

export default function DetailsCard(props) {
    const {
        // strain_image,
        card
    } = props
    
// const initialState = {
//     strain_image:'#',
//     strain_name:'Gysahl Greens',
//     strain_type:'Sativa',
//     strain_fragrance_profile:'Smells strongly of wild onion',
//     strain_description:'Fully man, keif gummies are the indoor equivalent of body high super mellow. Make a quick pipe out of an apple and release the carb Purple Haze all around. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Guatemalan purple haze grown outdoors by ganja shaman.',
//     // Mybe more data points for what it treats? 
//   }


/* waiting on input for details page design. I'm thinking...
when the user isn't signed in we can have a table on the api of dummy
data. Model the details page to load up the dummy data and only give 
the user access to the "real" data after log in. So all of the content
on this page will be URL generated.*/
    return (
    <div className={'details container'}>
        {/* <img src={strain_image}/> */}
    <h3>{card.strain_name} : {card.strain_type}</h3>

        <p>Details: {card.description}</p>

    </div>
    )
}