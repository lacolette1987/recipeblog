import React, { useEffect } from 'react';
import { LoginForm } from '../components/auth/login-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { login } from '../store/auth/auth-slice';


const SignIn: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser)
  const loading = useSelector((state: RootState) => state.auth.loading);
  const error = useSelector((state:RootState) => state.auth.error);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);


  return (
    <LoginForm handleSubmit={(cred) => dispatch(login(cred))} loading={loading} authError={error}></LoginForm>
  );
};

export default SignIn;

