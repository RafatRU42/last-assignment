import React, {  createContext } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'



export const authContext = createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {

    const provider = new GoogleAuthProvider()

    const googleLogin = provider =>{
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo= {createUser, login}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;