import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const provaider = new GoogleAuthProvider();

  const handelUserCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // handel google user create
  const handelGoogleUserCreatePopup = () => {
    setLoding(false);
    return signInWithPopup(auth, provaider);
  };

  // user name and profile update
  const userProfileAndNameUpdate = (profile) => {
    setLoding(false);
    return updateProfile(auth.currentUser, profile);
  };
  // handel user login
  const handelLoginGmailPassword = (email, password) => {
    setLoding(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user email verify function
  const handelUserVeryfy = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // unSubscribe mount
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current User", currentUser);
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setLoding(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // sing out
  const singOutAccount = () => {
    console.log("logout");
    setLoding(false);
    setUser(null);
    return signOut(auth);
  };

  // handel shear context obj
  const authContextProvider = {
    handelUserCreate,
    handelGoogleUserCreatePopup,
    setUser,
    user,
    singOutAccount,
    handelLoginGmailPassword,
    userProfileAndNameUpdate,
    loding,
    handelUserVeryfy,
  };

  return (
    <AuthContext.Provider value={authContextProvider}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvaider;
