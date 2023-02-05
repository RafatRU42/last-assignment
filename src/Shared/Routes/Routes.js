import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Dashboard/DashboardLayout/DashboardLayout';
import Main from '../../Main/Main';
import Home from '../../Pages/Home/Home';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SignUp from '../SignUp/SignUp';
import AddProducts from './AddProducts';

const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<PrivateRoute><Home></Home></PrivateRoute>},
        {path:'/signup',element:<SignUp></SignUp>},
        {path:'/login',element:<Login></Login>},
    ]},

    {path:'/dashboard', element:<DashboardLayout></DashboardLayout>, children:[
        {path:'/dashboard/addProducts',element:<AddProducts></AddProducts>}
    ]}
])

export default router;