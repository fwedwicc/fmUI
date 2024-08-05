import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Components from './pages/Components';
import ComponentOverview from './pages/ComponentOverview';

const router = createBrowserRouter(
  [
    {
      path: "/fmUI/",
      element: <Home />,
      children: [
        {
          path: "/fmUI/home",
          element: <Home />,
        },
        {
          path: "/fmUI/components",
          element: <Components />,
        },
        {
          path: "/fmUI/components/:type",
          element: <ComponentOverview />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
