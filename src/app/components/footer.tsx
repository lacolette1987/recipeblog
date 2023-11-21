import { AppBar, Box, Container, Typography, createTheme } from '@mui/material'
import React from 'react'
import AppRoutes from '../routes/routes'
import { lime, purple } from '@mui/material/colors';


const Footer = () => {
  return (
    <>
    <Box bgcolor="#bca47c">
      <Container maxWidth="lg">
        <Typography>Kochen, Backen, Impressum</Typography>
      </Container>
    </Box>
    <Box bgcolor="#000000">
      <Container maxWidth="lg">
          <Typography variant='body2'>© Copyright 2024, Colette Güntensperger</Typography>
      </Container>
    </Box>
    </>


  )
}

export default Footer