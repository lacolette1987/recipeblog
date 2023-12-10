import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Main from './main';
import { myTheme } from './theme/my-theme';
import { StoreProvider } from './store/StoreProvider';
import { darkTheme } from './theme/dark-theme';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';


const App = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  return (
    <div className='App'>
      <StoreProvider>
        <ThemeProvider theme={darkMode ? darkTheme : myTheme}>
          <CssBaseline />
          <Main />
        </ThemeProvider>
      </StoreProvider>
    </div>
  );
};

export default App;
