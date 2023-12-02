// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/mdc-dark-deeppurple/theme.css";


import { Button } from 'primereact/button';  
        

function App() {

  return (
    <PrimeReactProvider>
      <Button label="Submit"/>
      <Header />
      <h1>Hello! This is my new portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere maxime libero repudiandae placeat ut perferendis veritatis ex cum nam, voluptatibus alias delectus laboriosam neque laudantium aliquam accusamus soluta quo!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero neque odio veniam quae nulla perspiciatis explicabo, voluptatum sapiente fuga quo? Aspernatur distinctio est error itaque officiis fugiat qui totam culpa.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus assumenda sed architecto eveniet voluptatum natus. Molestiae, quae. Rerum ducimus modi fugit earum exercitationem corporis quidem labore cum in quo?
      </p>
      <Footer />
    </PrimeReactProvider>
  )
}

export default App
