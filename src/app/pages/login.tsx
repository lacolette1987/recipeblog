import React, {useEffect} from 'react';
import {LoginForm} from "../components/auth/loginform";
import {useNavigate} from "react-router-dom";
import useAuth from "../context/auth-context";


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

