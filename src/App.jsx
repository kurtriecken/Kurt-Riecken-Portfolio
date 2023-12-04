// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import Particles from './components/Particles'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import { Outlet } from 'react-router-dom';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose your preferred theme
import 'primeicons/primeicons.css';


// import "primereact/resources/themes/mdc-dark-deeppurple/theme.css";


import { Button } from 'primereact/button';  
import BasicDemo from './components/Sidebar';
        

function App() {

  return (
    <PrimeReactProvider>
      {/* <Button label="Submit"/> */}
      <BasicDemo />
      {/* <Particles /> */}
    </PrimeReactProvider>
  )
}

export default App
