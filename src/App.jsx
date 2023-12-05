import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose your preferred theme
import 'primeicons/primeicons.css';




import { Button } from 'primereact/button';  
import Sidebar from './components/Sidebar';
        

function App() {

  return (
    <PrimeReactProvider>
      <Sidebar />
    </PrimeReactProvider>
  )
}

export default App
