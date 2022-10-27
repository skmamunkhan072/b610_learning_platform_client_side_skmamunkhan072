import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../components/share/firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState({});
  const provaider = new GoogleAuthProvider();

  const handelUserCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // handel google user create
  const handelGoogleUserCreatePopup = () => {
    return signInWithPopup(auth, provaider);
  };

  // unSubscribe mount
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("current User", currentUser);
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      // setLoding(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // sing out
  const singOutAccount = () => {
    // setLoding(false);
    signOut(auth);
  };

  // handel shear context obj
  const authContextProvider = {
    handelUserCreate,
    handelGoogleUserCreatePopup,
    setUser,
    user,
    singOutAccount,
  };

  return (
    <AuthContext.Provider value={authContextProvider}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvaider;
