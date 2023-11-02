import {AppBar, createTheme, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import Header from './components/header';
import AppRoutes from "./routes/routes";
import {AuthProvider} from "./context/auth-context";
import myTheme from './theme/my-theme';


const App = () => {

    return (
        <div className="App">
            <AuthProvider>
                <ThemeProvider theme={myTheme}>
                    <CssBaseline/>
                    <AppBar position="static">
                        <Typography>LOGO</Typography>
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
