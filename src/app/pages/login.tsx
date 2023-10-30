import React, {useEffect} from 'react';
import {LoginForm} from "../components/auth/loginForm";
import {useNavigate} from "react-router-dom";
import useAuth from "../context/AuthContext";


const SignIn: React.FC = () => {

    const {user, loading, login} = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate('/');
        }
    }, [user]);


    return (<>
            <LoginForm handleSubmit={login}></LoginForm>
            {`${loading}`}
        </>
    );
};

export default SignIn;

