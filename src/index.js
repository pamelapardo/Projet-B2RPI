import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Applications from './pages/applications';
import Wiki from './pages/wiki';

const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<div>This page does not exist.</div>,
    children: [
      {path:"/", element:<Applications/>},
      {path:"/wiki", element:<Wiki/>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);