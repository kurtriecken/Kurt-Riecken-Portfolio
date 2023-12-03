import React from 'react'
import ReactDOM from 'react-dom/client'

// Bring in the required imports from 'react-router-domt' to set up app routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import AboutMePage from './pages/AboutMePage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
// import { ChakraProvider } from '@chakra-ui/react'
// 1. Import the extendTheme function
// import { ChakraProvider } from '@chakra-ui/react'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tooltip/dist/react-tooltip.css'
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
      },
      {
        path: 'aboutme',
        element: <AboutMePage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);