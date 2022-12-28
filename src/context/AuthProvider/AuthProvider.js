import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //sigUp with email and password
    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login with email and password
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update Profile name
    const UpdateProfileName =(userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }

    //signOut 
    const signOutUser = ()=>{
        return signOut(auth)
    }

    //observe user
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return ()=> unSubscribe()
    },[])

    const authInfo = {
        signUp,
        loginUser,
        UpdateProfileName,
        user,
        signOutUser
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