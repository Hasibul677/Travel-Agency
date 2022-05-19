import { useEffect, useState } from 'react';
import initializeAuthentication from './../components/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleSignIn=()=>{
       const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        setIsLoading(true)
       const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              setIsLoading(false)
            } else {
                setUser({})
                setIsLoading(false)
            }
          });
          return ()=> unSubscribe;
    },[])

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            setIsLoading(false)
          }).catch((error) => {
            setError(error.message)
          });
    }
    return {
        user,
        setUser,
        error,
        setError,
        isLoading,
        setIsLoading,
        googleSignIn,
        logOut
    }
};

export default useFirebase;