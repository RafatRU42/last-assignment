import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Main/Main';
import Home from '../../Pages/Home/Home';
import SignUp from '../SignUp/SignUp';

const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/signup',element:<SignUp></SignUp>},
    ]}
])

export default router;