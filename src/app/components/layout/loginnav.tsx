import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import User from '../../models/User';
import PersonIcon from '@mui/icons-material/Person';
import { Grid } from '@mui/material';
import { Colors } from '../../theme/my-theme';

interface LoginNavProps {
  user: User | undefined;
  handleLogout?: () => void;
}

const LoginNav: React.FC<LoginNavProps> = ({ user, handleLogout }) => {
  const userId = user?.uid;

  const onLogoutClick = async () => {
    try {
      await signOut(auth);
      if (handleLogout) {
        handleLogout();
      }
    } catch (error) {
      console.error('Fehler beim Ausloggen:', error);
    }
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const location = useLocation();

  return (
    <Grid container>
      <Grid item>
        {userId ? (
          <Box sx={{ flexGrow: 0 }}>
            {userId && location.pathname !== '/create' ? (
              <Button
                component={NavLink}
                sx={{
                  p: '19px 15px 15px 15px',
                  color: Colors.black,
                  '&.active': {
                    color: Colors.secondary.main,
                  },
                  '&:hover': {
                    background: Colors.secondary.light,
                    color: Colors.white,
                  },
                }}
                to={'/create'}
              >
                Erfassen
              </Button>
            ) : (
              ''
            )}
            <Tooltip arrow title="Open">
              <IconButton onClick={handleOpenUserMenu}>
                <PersonIcon
                  sx={{
                    color: Colors.secondary.light,
                    transition: '.3s ease-out',
                    '&:hover': {
                      color: Colors.primary.main,
                    },
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              elevation={0}
              sx={{ mt: '40px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                component={NavLink}
                sx={{
                  '&.active': {
                    background: Colors.primary.main,
                    color: '#ffffff',
                  },
                }}
                to={'/profile'}
                onClick={handleCloseUserMenu}
              >
                Profil
              </MenuItem>
              <MenuItem component={NavLink} to={'/'} onClick={onLogoutClick}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button
            disableRipple
            component={Link}
            sx={{
              display: 'block',
              p: '3px 0px 0px 0px',
              '&:hover': {
                background: 'transparent',
                color: Colors.secondary.main,
              },
            }}
            to={'/login'}
          >
            Login
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default LoginNav;
