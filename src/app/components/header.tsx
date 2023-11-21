import React from 'react'
import { AppBar, Container, Grid, } from '@mui/material';
import Navigation from './navigation';
import User from '../models/User';
import LoginNav from './loginnav';
import { Link } from 'react-router-dom';

interface HeaderProps {
    user: User | undefined;
    handleLogout?: () => void;
  }

  
const Header: React.FC<HeaderProps> = ({ user, handleLogout }) => {

    return (
        <>
            <AppBar position="static" elevation={0}>
                <Container maxWidth="lg">
                    <Grid container>
                        <Link to={'/'}>
                            <img src="assets/logo.png" alt="Beschreibung des Bildes" style={{ maxWidth: '150px', paddingTop: '40px', paddingBottom: '30px' }} />
                        </Link>
                    </Grid>
                </Container>
            </AppBar>
            <Container maxWidth="lg">
                <Grid container justifyContent={'space-between'}>
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
