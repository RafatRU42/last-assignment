import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Dashboard/DashboardLayout/DashboardLayout';
import Main from '../../Main/Main';
import BookingModal from '../../Pages/BookingModal/BookingModal';

import Home from '../../Pages/Home/Home';
import Iphone from '../../Pages/Iphone/Iphone';
import MyProducts from '../../Pages/MyProducts/MyProducts';
import Samsung from '../../Pages/Samsung/Samsung';
import Vivo from '../../Pages/Vivo/Vivo';
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
        {path:'/dashboard/addProducts',element:<AddProducts></AddProducts>},
        {path:'/dashboard/myProducts',element:<MyProducts></MyProducts>},
        {path:'/dashboard/Samsung',element:<Samsung></Samsung>},
        {path:'/dashboard/VIVO',element:<Vivo></Vivo>},
        {path:'/dashboard/iPhone',element:<Iphone></Iphone>},
        {path:'/dashboard/bookingNow',element:<BookingModal></BookingModal>},
      
    ]}
])

export default router;