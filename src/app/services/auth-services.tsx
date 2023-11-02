import { createContext, PropsWithChildren, useContext, useState } from "react";
import User from "../models/user";
import { AuthFormState } from "../components/auth/loginform";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase-config";

interface AuthContextType {
    user?: User;
    loading: boolean;

    login: (credentials: AuthFormState) => void;
    logOut: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: PropsWithChildren) {
    // ...
    // Der restliche Code bleibt unverändert
}

export default AuthContext;
