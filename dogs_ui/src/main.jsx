import './Page/polyfills.js';  // Import polyfill
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Stats from './Page/Stats.jsx';
import Landing from './Page/Onboarding.jsx';
import Homeboy from './Page/Homeboy.jsx';
import Invite from './Page/Invite.jsx';
import ErrorPage from './Page/ErrorPage.jsx';


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";







const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homeboy />
      },
      {
        path: "/stats",
        element: <Stats />
      },
      {
        path: "/invite",
        element: <Invite />
      },
      
    ]
  },

  {
    path: "/landing",
    element: <Landing/>,
    errorElement: <div>Error!</div>,

  
  },

  {
    path: "/homeboy",
    element: <Homeboy/>,
    errorElement: <div>Error!</div>,
  },

  {
    path: "/invite",
    element: <Invite/>,
    errorElement: <div>Error!</div>,
  },

  {
    path: "/stats",
    element: <Stats/>,
    errorElement: <div>Error!</div>,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />

</React.StrictMode>
);
