import {AppBar, createTheme, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import Header from './components/header';
import AppRoutes from "./routes/routes";
import {AuthProvider} from "./context/AuthContext";
import myTheme from './components/theme/myTheme';


const App = () => {

    return (
        <div className="App">
            <AuthProvider>
                <ThemeProvider theme={myTheme}>
                    <CssBaseline/>
                    <AppBar position="static">
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Header user={null}/>
                    </AppBar>
                    <Container>
                        <AppRoutes/>
                    </Container>
                </ThemeProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
