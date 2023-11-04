import { Box, CssBaseline, ThemeProvider } from '@mui/material';
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
                    <Header user={null} />
                    <Box
                        sx={{
                            pt: 8,
                            pb: 8,
                        }}
                        >
                        <Container maxWidth="lg">
                            <AppRoutes/>
                        </Container>
                    </Box>
                    <Footer />
                </ThemeProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
