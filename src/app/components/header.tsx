import React from 'react'
import {User} from 'firebase/auth';
import { AppBar, Container, Grid, Typography } from '@mui/material';
import Navigation from './navigation';


const Header: React.FC<{ user: User | null; handleLogout?: () => void }> = ({
                                                                                user,
                                                                                handleLogout
                                                                            }) => {


    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Typography>LOGO</Typography>
                    </Grid>
                    <Grid item xs>
                    <Navigation user={null} />
                </Grid>
            </Grid>
        </Container>
    </AppBar>
)}

export default Header
