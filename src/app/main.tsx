import Container from '@mui/material/Container';
import Header from './components/header';
import AppRoutes from './routes/routes';
import Footer from './components/footer';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';


const Main = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  return (<>
    <Header user={currentUser} />
    <main>
      <Box sx={{ mb: 8, mt: 4, p: 0 }}>
        <AppRoutes />
      </Box>
    </main>
    <Footer />
  </>);
};

export default Main;
