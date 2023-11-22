import Typography from "@mui/material/Typography";
import SignUpForm from "./sign-up";
import SignInForm from "./sign-in";
import React, { useState } from "react";
import { Box, Button, Container, CssBaseline } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';

interface LoginProps {
    handleSubmit: (cred: AuthFormState) => void;
}

export interface AuthFormState {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isSignUpMode: boolean;
}

const initialState: AuthFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isSignUpMode: false,
};

export const LoginForm: React.FC<LoginProps> = ({ handleSubmit: submitForm }) => {
    const { control, handleSubmit: handleFormSubmit, formState: { errors } } = useForm({
        defaultValues: initialState,
    });

    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const setSignUp = (value: boolean) => {
        setIsSignUpMode(value);
    }

    const onSubmit = (formData: AuthFormState) => {
        // Deine Formularübermittlungslogik hier
        submitForm(formData); // Verwende hier die umbenannte Funktion
    };

    return (
        <div>
            <Container maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Typography variant="h1">{!isSignUpMode ? 'Sign-In' : 'Sign-Up'}</Typography>
                    <form onSubmit={handleFormSubmit(onSubmit)}>
                        {isSignUpMode && (
                            <SignUpForm control={control} errors={errors} />
                        )}
                        <SignInForm control={control} errors={errors} />
                        <Button className={`btn ${!isSignUpMode ? 'btn-sigh-in' : 'btn-sign-up'}`} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            {!isSignUpMode ? 'Sign-in' : 'Sign-up'}
                        </Button>
                    </form>
                    <div>
                        {!isSignUpMode ? (
                            <div>
                                <p>
                                    Don't have an account?&nbsp;
                                    <span style={{ cursor: 'pointer' }} onClick={() => setSignUp(true)}>
                                        <strong>Sign Up</strong>
                                    </span>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p>
                                    Already have an account?&nbsp;
                                    <span style={{ cursor: 'pointer' }} onClick={() => setSignUp(false)}>
                                        <strong>Sign In</strong>
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>
                </Box>
            </Container>
        </div>
    );
}