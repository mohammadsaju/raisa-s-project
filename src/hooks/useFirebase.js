import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuth from '../firebase/FirebaseInitialize';

//initialize auth
initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isloading, setIsloading] = useState(true);
    const auth = getAuth();

    //create an user profile
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //sing in user with email and password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //sign in with google
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //signout
    const logOut = () => {
        return signOut(auth);
    }
    //observe user state
    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                //user sign in
                setUser(user);
                setIsloading(false);
            } else {
                //user sign out
                setUser({});
            }
            setIsloading(false)
            
        });
        return () => unsubsCribe();
    },[]);

    return {
        user, 
        error,
        isloading,
        signUpUser,
        signInUser,
        signInUsingGoogle,
        logOut,
    }
}

export default useFirebase;