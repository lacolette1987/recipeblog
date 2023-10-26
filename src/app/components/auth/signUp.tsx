import React from 'react';
import TextField from '@mui/material/TextField';

interface SignUpFormProps {
  firstName: string;
  lastName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ firstName, lastName, handleChange }) => {
  return (
    <div>
      <TextField
        margin="normal"
        required
        fullWidth
        id="firstName"
        label="Vorname"
        name="firstName"
        autoComplete="firstName"
        autoFocus
        value={firstName}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="lastName"
        label="Nachname"
        type="lastName"
        id="lastName"
        autoComplete="current-password"
        value={lastName}
        onChange={handleChange}
      />
    </div>
  );
};

export default SignUpForm;