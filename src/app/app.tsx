import {AppBar, createTheme, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import Header from './components/header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppRoutes from "./routes/routes";
import {AuthProvider} from "./context/AuthContext";


const App = () => {

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


    return (
        <div className="App">
            <AuthProvider>
                <ThemeProvider theme={theme}>
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
