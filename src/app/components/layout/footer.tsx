import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { FooterContainer, myTheme } from '../../theme/my-theme';

const Footer = () => {
  return (
    <Box sx={{ background: myTheme.palette.secondary.main }}>
      <FooterContainer maxWidth="lg">
        <Grid container justifyContent={'space-between'}>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item>
                <Link href="/imprint">
                  <Typography variant="body1">Impressum</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/baking">
                  <Typography variant="body1">Backen</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/cooking">
                  <Typography variant="body1">Kochen</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              © Copyright 2024, Colette Güntensperger
            </Typography>
          </Grid>
        </Grid>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
