import React from 'react';
import TextField from '@mui/material/TextField';

interface SignInFormProps {
  email: string;
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ email, password, handleChange }) => {
  return (
    <div>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-Mail"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Passwort"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={handleChange}
      />
    </div>
  );
};

export default SignInForm;
