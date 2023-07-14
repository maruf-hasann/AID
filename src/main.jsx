import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import Home from './Page/Home/Home/Home';
import Layout from './Layout/Layout';

const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [{
    path: '/',
    element:<Home/>
  }]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
