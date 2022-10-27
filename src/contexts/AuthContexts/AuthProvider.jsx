import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import toast from "react-hot-toast";
const notify = (msg) => toast(msg);

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [seeDetails, setSeeDetails] = useState(null);
  const [spinner, setSpiner] = useState(true);
  const google = (googleProvider) => {
    setSpiner(true);
    return signInWithPopup(auth, googleProvider);
  };
  const gitHub = (gitHubProvider) => {
    setSpiner(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const createUserByEmail = (email, password) => {
    setSpiner(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const updateProfileUser = (info) => {
    setSpiner(true);
    return updateProfile(auth.currentUser, info);
  }
  const sendVerificationEmail = () => {
    return sendEmailVerification(auth.currentUser)
      .then(() => {
      notify('Email verification sent please cheak spam folder!')
    })
  }
  const login = (email, password) => {
    setSpiner(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setSpiner(true);
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setSpiner(false);
    });
    return ()=> unsubscribe();
  }, []);
  const handleDetails = (details) => {
    console.log(details);
    setSeeDetails(details);
  }
  const userInfo = {
    google,
    login,
    user,
    logout,
    createUserByEmail,
    updateProfileUser,
    sendVerificationEmail,
    gitHub,
    handleDetails,
    seeDetails,
    spinner,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
// https://assingment-ten-server.vercel.app/course-categories
// https://assingment-ten-server.vercel.app/category/all
