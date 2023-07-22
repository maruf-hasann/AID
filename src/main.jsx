import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import Home from './Page/Home/Home/Home';
import Layout from './Layout/Layout';
import Login from './Page/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import Register from './Page/Register/Register';
import DashboardLayout from './Layout/DashboardLayout';
import Employee from './Page/Admin/Employee/Employee';

import AllProduct from './Page/Admin/Product/AllProduct';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient();

const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [{
    path: '/',
    element:<Home/>
  }, {
    path: '/login',
    element:<Login/>
    }, {
    path: '/register',
      element:<Register/>
  }]
}, {
  path: '/dashboard',
  element: <DashboardLayout></DashboardLayout>,
  children: [{
    path: 'employee',
    element: <Employee/>
  }, {
    path: 'all-product',
    element:<AllProduct></AllProduct>
  }]
}])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
