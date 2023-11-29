import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';

const ColorModeContext = React.createContext({ toggleColorMode: () => {
    //
} });

const Darkmode = () => {
  const myTheme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {myTheme.palette.mode === 'dark' ? (
            <>
            <Typography>Lightmode</Typography>
            <LightModeIcon />
            </>
        ) : (
            <>
            <Typography>Darkmode</Typography>
          <Brightness3Icon />
          </>
        )}
    </IconButton>
  );
};

export default Darkmode;
