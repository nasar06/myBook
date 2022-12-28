import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/Firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    //sigUp with email and password
    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        signUp
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