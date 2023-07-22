import React, { createContext, useEffect, useState } from 'react';
export const authContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import apps from '../Firebase/firebase.inint';


const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);
  const auth = getAuth(apps);
  const [user,setUser] = useState(null)
  
    
    const login = (email,password) => {
         setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
  }
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoader(false)
    })
    return () => {
      unsubscribe()
    }
  },[])
  
  const authInfo = {
    user,
    login,
    registerUser,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;