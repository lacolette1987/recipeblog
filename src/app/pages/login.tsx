import React from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../firebase-config';
import {FormState, LoginForm} from "../components/auth/loginForm";
import {useNavigate} from "react-router-dom";


const SignIn: React.FC = () => {

    const navigate = useNavigate();


    const handleAuth = async (formState: FormState) => {
        if (!formState.isSignUpMode) {
            try {
                const {user} = await signInWithEmailAndPassword(auth, formState.email, formState.password);
                navigate("/");
            } catch (e) {
                console.error('This account does not exist!');
            }
        } else {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, formState.email, formState.password);
                const user = userCredential.user;
                await updateProfile(user, {
                    displayName: `${formState.firstName} ${formState.lastName}`,
                });
                navigate("/");
            } catch (error) {
                console.error('Error creating user:', error);
            }
        }
    };


    return (
        <LoginForm handleSubmit={handleAuth}></LoginForm>);
};

export default SignIn;

