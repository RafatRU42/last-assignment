import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Dashboard/DashboardLayout/DashboardLayout';
import Main from '../../Main/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import BookingModal from '../../Pages/BookingModal/BookingModal';
import Error from '../../Pages/Error/Error';

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
    {path:'/',errorElement:<Error></Error>, element:<Main></Main>,children:[
        {path:'/',element:<PrivateRoute><Home></Home></PrivateRoute>},
        {path:'/signup',element:<SignUp></SignUp>},
        {path:'/login',element:<Login></Login>},
        {path:'/blogs',element:<Blogs></Blogs>},

    ]},

    {path:'/dashboard', errorElement:<Error></Error>, element:<DashboardLayout></DashboardLayout>, children:[
        {path:'/dashboard/addProducts',element:<AddProducts></AddProducts>},
        {path:'/dashboard/myProducts',element:<MyProducts></MyProducts>},
        {path:'/dashboard/Samsung',element:<Samsung></Samsung>},
        {path:'/dashboard/VIVO',element:<Vivo></Vivo>},
        {path:'/dashboard/iPhone',element:<Iphone></Iphone>},
        // {path:'/dashboard/booking/:id',element:<BookingModal></BookingModal>,loader:({params})=>fetch(`http://localhost:5000/iPhone/${params.id}`)},
      
    ]}
])

export default router;