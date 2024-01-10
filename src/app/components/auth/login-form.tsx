import Typography from '@mui/material/Typography';
import SignUpForm from './sign-up';
import SignInForm from './sign-in';
import React from 'react';
import { Grid, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MainContainer, ReadmoreButton } from '../../theme/my-theme';


interface LoginProps {
  handleSubmit: (cred: AuthFormState) => void;
  loading: boolean;
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
  isSignUpMode: false
};

export const LoginForm: React.FC<LoginProps> = ({ handleSubmit: submitForm, loading }) => {
  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<AuthFormState, string>({
    defaultValues: initialState
  });

  const isSignUpMode = watch('isSignUpMode', false);

  const setSignUp = (value: boolean) => {
    setValue('isSignUpMode', value);
  };

  const onSubmit = (formData: AuthFormState) => {
    submitForm(formData);
  };

  return (
    <MainContainer maxWidth='md'>
      <Typography variant='h1'>{!isSignUpMode ? 'Anmelden' : 'Registrieren'}</Typography>
      <Typography variant='body1' sx={{mb: '40px'}}>Melden dich an, um deine eigenen kulinarischen Kreationen zu teilen. Mit deinem persönlichen Konto kannst du deine eigenen Rezepte erfassen und die Gerichte anderer Nutzer bewerten.</Typography>
      <form onSubmit={handleFormSubmit(onSubmit)}>
        {isSignUpMode && (
          <SignUpForm control={control} errors={errors} />
        )}
        <SignInForm control={control} errors={errors} />
        <ReadmoreButton disabled={loading} fullWidth type='submit' variant='outlined' sx={{ margin: '24px 0px 16px 0px !important' }}
                       disableElevation>
          {!isSignUpMode ? 'Anmelden' : 'Registrieren'}
        </ReadmoreButton>
      </form>
      <Grid container>
        <Grid item xs>
          <Link href='/forgot'>
            <Typography variant='body1'>Passwort vergessen?</Typography>
          </Link>
        </Grid>
        <Grid item>
          {!isSignUpMode ? (
            <div>
              Bist du neu hier?&nbsp;
              <span style={{ cursor: 'pointer' }} onClick={() => setSignUp(true)}>
                                <strong>Registrieren</strong>
                            </span>
            </div>
          ) : (
            <div>
              Hast du schon einen Account?&nbsp;
              <span style={{ cursor: 'pointer' }} onClick={() => setSignUp(false)}>
                            <strong>Login</strong>
                        </span>
            </div>
          )}
        </Grid>
      </Grid>
    </MainContainer>
  );
};
