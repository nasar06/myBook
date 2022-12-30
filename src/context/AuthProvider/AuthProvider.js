import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true); 
    const googleProvider = new GoogleAuthProvider()
    //sigUp with email and password
    const signUp = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login with email and password
    const loginUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update Profile name
    const UpdateProfileName =(userInfo)=>{
        setLoader(true)
        return updateProfile(auth.currentUser, userInfo)
    }

    //signOut 
    const signOutUser = ()=>{
        setLoader(true)
        return signOut(auth)
    }

    //login with google
    const loginWithGoogle = () =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    //observe user
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoader(false)
        })
        return ()=> unSubscribe()
    },[])

    const authInfo = {
        signUp,
        loginUser,
        UpdateProfileName,
        user,
        signOutUser,
        loginWithGoogle,
        loader
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;