import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Welcome from './pages/Welcome';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';

/*
 * Styling
*/
const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(59, 113, 202, 1);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  }, 
  {
    path: "/home",
    element: <Home />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
