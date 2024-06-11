import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const ContextComponent = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(truegit);

  const googleProvider = new GoogleAuthProvider();

  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUserAccout = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false)
      }
    });
    return () => unsubcribe();
  });
  const info = {user,loading,logInWithGoogle,createUserAccout,logIn,logOut};
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default ContextComponent;
