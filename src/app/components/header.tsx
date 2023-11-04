import React from 'react'
import {User} from 'firebase/auth';
import { AppBar, Container, Grid, Typography } from '@mui/material';
import Navigation from './navigation';
import { useState } from 'react';



interface HeaderProps {
    user: User | null;
    handleLogout?: () => void;
  }

  
const Header: React.FC<HeaderProps> = ({ user, handleLogout }) => {
    const [active, setActive] = useState("home");

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Typography>LOGO</Typography>
                    </Grid>
                    <Grid item xs>
                    <Navigation user={null} setActive={setActive} />
                </Grid>
            </Grid>
        </Container>
    </AppBar>
)}

export default Header
