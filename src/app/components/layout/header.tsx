import React from 'react'
import { AppBar, Container, Grid } from '@mui/material';
import Navigation from './navigation';
import User from '../../models/User';
import { Link } from 'react-router-dom';
import LoginNav from './loginnav';
import Darkmode from '../darkmode';


interface HeaderProps {
    user: User | undefined;
    handleLogout?: () => void;
  }

  
const Header: React.FC<HeaderProps> = ({ user, handleLogout }) => {

    return (
        <>
            <AppBar position="static" elevation={0}>
                <Container maxWidth="lg">
                    <Grid container justifyContent={'space-between'}>
                        <Grid item>
                            <Link to={'/'}>
                                <img src="assets/logo.png" alt="Beschreibung des Bildes" style={{ maxWidth: '230px', paddingTop: '25px', paddingBottom: '15px' }} />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Darkmode />
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
            <Container maxWidth="lg" sx={{ marginTop: '40px' }}>
                <Grid container justifyContent={'space-between'} sx={{borderBottom: '1px solid #000000', borderTop: '1px solid #000000'}} alignItems={'center'}>
                    <Grid item>
                        <Navigation user={user} />
                    </Grid>
                    <Grid item>
                        <LoginNav user={user} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )}

export default Header