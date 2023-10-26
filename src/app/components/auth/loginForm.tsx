import Typography from "@mui/material/Typography";
import SignUpForm from "./signUp";
import SignInForm from "./signIn";
import React, {ChangeEvent, FormEvent, useState} from "react";


interface LoginProps {
    handleSubmit: (cred: FormState) => void;
}

export interface FormState {
    email: string;
    password: string;
    firstName: string;
    lastName: string;

    isSignUpMode: boolean;
}

const initialState: FormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',

    isSignUpMode: false,
};

export const LoginForm: React.FC<LoginProps> = ({handleSubmit}) => {

    const [formState, setFormState] = useState<FormState>(initialState);
    const {isSignUpMode, email, password, firstName, lastName} = formState;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };

    const setSignUp = (value: boolean) => {
        setFormState({
            ...formState,
            isSignUpMode: value,
        });
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isSignUpMode) {
            if (email && password) {
                handleSubmit(formState);
            }
        } else {
            if(email && password && firstName && lastName){
                handleSubmit(formState);
            }
        }
    }


    return <div>
        <Typography component="h1" variant="h3">
            {!isSignUpMode ? 'Sign-In' : 'Sign-Up'}
        </Typography>
        <form onSubmit={handleFormSubmit}>
            {isSignUpMode && (
                <SignUpForm firstName={firstName} lastName={lastName} handleChange={handleChange}/>
            )}
            <SignInForm email={email} password={password} handleChange={handleChange}/>
            <button className={`btn ${!isSignUpMode ? 'btn-sigh-in' : 'btn-sign-up'}`} type="submit">
                {!isSignUpMode ? 'Sign-in' : 'Sign-up'}
            </button>
        </form>
        <div>
            {!isSignUpMode ? (
                <div>
                    <p>
                        Don't have an account?&nbsp;
                        <span style={{cursor: 'pointer'}} onClick={() => setSignUp(true)}>
                 <strong>Sign Up</strong>
               </span>
                    </p>
                </div>
            ) : (
                <div>
                    <p>
                        Already have an account?&nbsp;
                        <span style={{cursor: 'pointer'}} onClick={() => setSignUp(false)}>
                 <strong>Sign In</strong>
               </span>
                    </p>
                </div>
            )}
        </div>
    </div>;
}
