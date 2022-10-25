import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const google = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };
  const createUserByEmail = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const updateProfileUser = (info) => {
    return updateProfile(auth.currentUser, info);
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return ()=> unsubscribe();
  }, []);
  const userInfo = {
    google,
    login,
    user,
    logout,
    createUserByEmail,
    updateProfileUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
// https://assingment-ten-server.vercel.app/course-categories
// https://assingment-ten-server.vercel.app/category/all
