import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const google = (googleProvider) => {
      return signInWithPopup(auth, googleProvider);
    };
    const userInfo = {google}
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;