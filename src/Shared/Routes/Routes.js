import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Main/Main';
import Home from '../../Pages/Home/Home';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SignUp from '../SignUp/SignUp';

const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<PrivateRoute><Home></Home></PrivateRoute>},
        {path:'/signup',element:<SignUp></SignUp>},
        {path:'/login',element:<Login></Login>},
    ]}
])

export default router;