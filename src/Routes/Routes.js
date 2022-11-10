import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Register from "../Pages/Register/Register";
import Terms from '../Pages/Terms/Terms'
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Restricted from './Restricted'
import MyServices from "../Pages/My Services/MyServices";
import MyReviews from "../Pages/My Reviews/MyReviews";
import Blog from "../Pages/Blog/Blog";




const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/')
        },
        {
          path: '/login', 
          element: <Restricted><Login></Login></Restricted>
        },
        {
          path: '/register', 
          element: <Restricted><Register></Register></Restricted>
        },
        {
          path: '/terms', 
          element: <Restricted><Terms></Terms></Restricted>
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: ()=> fetch('http://localhost:5000/services')
        },
        {
          path: '/services/:id',
          element: <Service></Service>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: '/myservices/:id',
          element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/myservices/${params.id}`)
        },
        {
          path: '/myreviews',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path: '/myreviews/:id',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/myreviews/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <h1>404</h1>
        }

      ]
    }
  ]);

  export default router;
