import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const registerHandler = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginHandler = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googlePopUpSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logoutHandler = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateProfileHandler = (name, url) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,

        })
    }
    const githubPopup = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const userInfo = { user, loading, registerHandler, loginHandler, googlePopUpSignin, updateProfileHandler, githubPopup, logoutHandler, setLoading }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;