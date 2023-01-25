import React, {  createContext } from 'react';
import app from '../../firebase/firebase.config';
import {getAuth} from 'firebase/auth'



export const authContext = createContext();
const auth = getAuth(app)

const Authprovider = ({children}) => {


    const authInfo= {}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;