import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink, useLocation } from 'react-router-dom';
import User from '../../models/User';
import { Colors } from '../../theme/my-theme';

interface NavigationProps {
  user: User | undefined;
  handleLogout?: () => void;
  setActive?: (active: string) => void;
}

const pages = [
  { label: 'Apéro', to: '/apero' },
  { label: 'Vorspeise', to: '/vorspeise' },
  { label: 'Hauptgang', to: '/hauptgang' },
  { label: 'Dessert', to: '/dessert' },
  { label: 'Backen', to: '/backen' },
];

const Navigation: React.FC<NavigationProps> = ({
  user,
}) => {
  const userId = user?.uid;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const location = useLocation();

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          elevation={0}
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page, index) => (
            <MenuItem
              component={NavLink}
              to={page.to}
              key={index}
              onClick={handleCloseNavMenu}
              sx={{
                '&.active': {
                  background: Colors.secondary.main,
                  color: Colors.white
                }
    
              }}
            >
              {page.label}
            </MenuItem>
          ))}
          {userId ? (
            <MenuItem
              component={Link}
              to={'/create'}
              onClick={handleCloseNavMenu}
              sx={{ color: Colors.secondary.main }}
            >
              Erfassen
            </MenuItem>
          ) : (
            ''
          )}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page, index) => (
          <Button
            key={index}
            component={NavLink}
            to={page.to}
            sx={{
              p: '17px 15px 15px 15px',
              '&.active': {
                color: Colors.secondary.main,
              },
              '&:hover': {
                background: 'transparent',
                color: Colors.secondary.main,
              }
              }}
          >
            {page.label}
          </Button>
        ))}
        {userId && location.pathname !== '/create' ? (
          <Button
            component={NavLink}
            sx={{
              p: '17px 15px 15px 15px',
              color: Colors.secondary.main,
            '&.active': {
              color: Colors.secondary.main,
            },
            '&:hover': {
              background: 'transparent',
              color: Colors.black,
            }
          }}
            to={'/create'}
          >
            Erfassen
          </Button>
        ) : (
          ''
        )}
      </Box>
    </>
  );
};

export default Navigation;
