import { useNavigate } from 'react-router-dom';
import { auth } from './firebase-config';
import { signOut } from 'firebase/auth';
import { ThemeProvider, createTheme, CssBaseline, AppBar, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Header from './components/header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppRoutes from "./routes/routes";

import styles from './app.module.css';


const App = () => {

  const currentUser = auth.currentUser;
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 18,
    },
    palette: {
      primary: {
        main: '#FF5733',
      },
        background: {
        default: '#f5f5f5',
      },
    },
  });
  const navigate = useNavigate();


  const handleLogout = () => {

    signOut(auth).then(() => {
      navigate("/login");
    });
  }



  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Header user={currentUser} handleLogout={handleLogout} />
          </AppBar>
          <Container>
            <AppRoutes />
          </Container>
        </ThemeProvider>
    </div>
  );
}

export default App;
