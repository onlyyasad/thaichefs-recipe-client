import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () =>{
        return signOut(auth)
    }

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged (auth, user =>{
            setUser(user);
            setLoading(false)
        });
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOutUser,
        googleLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;