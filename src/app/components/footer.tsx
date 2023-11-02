import { AppBar, Container } from '@mui/material'
import React from 'react'
import AppRoutes from '../routes/routes'

const Footer = () => {
  return (
    <AppBar position="static">
        <Container maxWidth="lg">
            <p>Footer</p>
        </Container>
    </AppBar>
  )
}

export default Footer