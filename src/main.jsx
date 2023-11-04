import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './routes/Layout.jsx';
import Home from './routes/Home.jsx';
import Login from './Auth/Login.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Register from './Auth/Register.jsx';
import AddBooks from './pages/AddBooks/AddBooks.jsx';
import PrivateRoute from './PrivateRoutes/PrivateRoute.jsx';
import ErrorElement from './comonents/ErrorPage/ErrorElement.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/addbook',
        element: <PrivateRoute>

          <AddBooks></AddBooks>
        </PrivateRoute>
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
