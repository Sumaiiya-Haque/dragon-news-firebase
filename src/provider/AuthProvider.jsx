import React, { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "hablu mia",
    email: "hablu@mia.com",
  });
  const authData = {
    user,
    setUser,
  }
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
