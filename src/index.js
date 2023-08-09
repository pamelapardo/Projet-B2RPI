import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import WikiContent from './pages/wikiOutlets/wikiContent';

const router= createBrowserRouter([
  {
    path:"/*",
    element:<App/>,
    errorElement:<div>This page does not exist.</div>,
    children:[
      {
        path:"wiki/*",
        element:<WikiContent/>,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);