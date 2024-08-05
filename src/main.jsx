import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Components, ComponentOverview } from './pages'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />, // Render the App component as the base route
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "components",
          element: <Components />,
        },
        {
          path: "components/:type",
          element: <ComponentOverview />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL, // This ensures the base URL is correctly handled
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
