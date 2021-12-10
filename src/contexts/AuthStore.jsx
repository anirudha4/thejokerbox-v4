import { auth } from '@config/firebase';
import React, { createContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

export default function AuthStore({ children }) {
    const [user, loading, error] = useAuthState(auth);
    const signUpWithEmailAndPassword = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    }
    const loginWithEmailAndPassword = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    }
    const logout = async () => {
        await signOut(auth)
    }
    const loginWithPopUp = async () => {
        await signInWithPopup(auth, provider)
        .then(res => {
            // do something
        })
        .catch(err => {
            // do something
        })
    }
    if(loading) {
        return <h1>Loading...</h1>
    }
    if(error) {
        return <h1>Something Went Wrong</h1>   
    }
    const value = {
        user,
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithPopUp,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
