import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Details from './componenets/Details';

// API url will go here
const baseUrl = '<insert_link_here>'

// I still don't completely know where to put state, but Gabe said top level so Im putting it here for now. 
// REMINDER: address this in next zoom

// form values
const initialFormValues = {
  name:'',
  username:'',
  email:'',
  password:'',
  ageCheckbox:''
}

// for now, Im making a lorum ipsum data object for me to render to the DOM, we can tweak it to look like the data we get from the DS Team, and hopefully get them to set up a table of funny, dummy, strains (My favorite idea so far is gysahl greens)
const defaultDetails = {
  strain_name:'gysahl greens',
  strain_type:'sativa',
  aroma:'Smells strongly of wold onion',
  description:'Fully man, keif gummies are the indoor equivalent of body high super mellow. Make a quick pipe out of an apple and release the carb Purple Haze all around. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. Taco Bell 4th meal with Doritos Locos tacos and a knife rip on the side. Guatemalan purple haze grown outdoors by ganja shaman.',
  // Mybe more data points for what it treats? 
}

function App() {
  const [details, setDetails] = useState(defaultDetails)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const {name} = evt.target
    const isChecked = evt.target.checked
    setFormValues({
      ...formValues,
      [name]: isChecked
    })
  }

  
  return (
    <div className="App">
      <Switch>
        <Route path='/'>
          <Details />
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
