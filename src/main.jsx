import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Components from './pages/Components';
import ComponentOverview from './pages/ComponentOverview';

const router = createBrowserRouter([
  {
    path: "/fmUI/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
], {
  basename: "/fmUI"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
