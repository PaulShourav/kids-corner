import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null)
const auth =getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
       
        return signInWithPopup(auth, googleProvider)
    }
    
    const logout = () => {
        
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        googleLogin,
        createUser,
        logIn,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;