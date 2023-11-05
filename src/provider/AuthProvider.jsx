import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    // create user
    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login user
    const userLogin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // update profile
    const handleupdateProfile = (name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        })
    }
    // logout
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

     // create user with popup
     const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // current signin user
     useEffect(() =>{
        onAuthStateChanged(auth, (user) =>{
            setUser(user)
            setLoading(false)
        })
     },[] )

    //  console.log(user)


   
    const userInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        userLogin,
        logout,
        handleupdateProfile
       
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;