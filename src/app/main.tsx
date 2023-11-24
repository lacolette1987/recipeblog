import Header from './components/header';
import AppRoutes from './routes/routes';
import Footer from './components/footer';
import { Box, Fab } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Link, useLocation } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const Main = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const location = useLocation();
  const userId = currentUser?.uid; // Korrigieren Sie userId hier

  return (<>
    <Header user={currentUser} />
    <main>
      <Box sx={{ mb: 8, mt: 4, p: 0 }}>
        <AppRoutes />
      </Box>
      {userId && location.pathname !== '/create' ? (
        <Link to="/create">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
        ) : ""}
    </main>
    <Footer />
  </>);
};

export default Main;
