import React from 'react'
import ReactDOM from 'react-dom/client'

// Bring in the required imports from 'react-router-domt' to set up app routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
// import { ChakraProvider } from '@chakra-ui/react'
// 1. Import the extendTheme function
// import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
// import { create } from 'lodash';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      }
    ]
  }
])


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);