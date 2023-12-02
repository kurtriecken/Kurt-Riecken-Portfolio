import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { ChakraProvider } from '@chakra-ui/react'
// 1. Import the extendTheme function
// import { ChakraProvider } from '@chakra-ui/react'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
