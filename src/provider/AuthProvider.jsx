import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import useAxios from '../hooks/useAxios';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const axios = useAxios()

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
   
     // create user with popup
     const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // current signin user
     useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, current =>{
            setUser(current)
            setLoading(false)
            
            const userEmail = current?.email || user?.email
            const loggUser = { email: userEmail}
            if(current){
                const url = '/jwt';
                axios.post(url, loggUser)
                .then(res => console.log(res.data))
            }
            else{
                const url = '/logOut';
                axios.post(url,loggUser)
                .then(res => console.log(res.data))
            }
        })
        return () =>{
            return unsubscribe;
        }
     },[] )
      // logout
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }


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