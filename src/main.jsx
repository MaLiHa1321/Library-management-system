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
import SingleCategory from './pages/SingleCategory.jsx';
import BookDeatils from './pages/BookDeatils.jsx';
import MoreDetails from './pages/MoreDetails.jsx';
import AllBooks from './pages/AllBooks/AllBooks.jsx';
import UpdateBooks from './pages/UpdateBooks/UpdateBooks.jsx';
import BorowBook from './pages/borrowedbook/BorowBook.jsx';
import ReviewBook from './pages/ReviewBook/ReviewBook.jsx';
import ReviewSection from './pages/ReviewBook/ReviewSection.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
     
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
      {
        path: '/singleCate/:id',
        element: <SingleCategory></SingleCategory>
      },
      {
        path: '/bookDetails/:id',
        element:  <PrivateRoute><BookDeatils></BookDeatils></PrivateRoute>,
        loader: ({params}) => fetch(`https://library-management-server-sepia.vercel.app/book/${params.id}`)
      },
      {
        path: '/moreDetail/:id',
        element: <MoreDetails></MoreDetails>,
        loader: ({params}) => fetch(`https://library-management-server-sepia.vercel.app/book/${params.id}`)

      },
      {
        path: '/allbooks',
        element:  <PrivateRoute>

          <AllBooks></AllBooks>
        </PrivateRoute>
      },
      {
        path: '/updateDetails/:id',
        element: <UpdateBooks></UpdateBooks>,
        loader: ({params}) => fetch(`https://library-management-server-sepia.vercel.app/book/${params.id}` )
      },
      {
        path: '/borrowed',
        element:  <PrivateRoute>

          <BorowBook></BorowBook>
        </PrivateRoute>
      },
      {
        path: '/reviewSection',
        element: <ReviewSection></ReviewSection>
      },
      {
        path: '/review/:id',
        element:  <PrivateRoute>

          <ReviewBook></ReviewBook>
        </PrivateRoute>,
        loader: ({params}) => fetch(`https://library-management-server-sepia.vercel.app/review/${params.id}`)
      }
     
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
