import { CssBaseline, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import Header from './components/header';
import AppRoutes from "./routes/routes";
import { AuthProvider } from "./context/auth-context";
import myTheme from './theme/my-theme';
import Footer from './components/footer';



const App = () => {

    return (
        <div className="App">
            <AuthProvider>
                <ThemeProvider theme={myTheme}>
                    <CssBaseline/>
                    <Header user={null}/>
                    <Container maxWidth="lg">
                        <AppRoutes/>
                    </Container>
                    <Footer />
                </ThemeProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
