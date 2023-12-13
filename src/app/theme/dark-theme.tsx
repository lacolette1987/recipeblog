import { Button, Card, List, ListItem, createTheme } from "@mui/material";
import { myTheme } from "./my-theme";
import styled from "@emotion/styled";

const Colors = {
    black: '#000000',
    lightgrey: '#dddddd',
    borderColors: '#2a2a2a',
    white: '#ffffff',
    darkgrey: '#dddddd',
    primary: {
        light: '#aea5ad',
        main: '#111111',
        dark: '#000000',
        contrastText: '#ffffff',
    },
    secondary: {
        light: '#e0d0bb',
        main: '#000000',
        dark: '#835635',
        contrastText: '#ffffff',
    }
  }




const darkTheme = createTheme({
    ...myTheme,
    palette: {
        background: {
          default: '#000000',
        },
    },
    typography: {
        ...myTheme.typography,
        body1: {
            ...myTheme.typography.body1,
            color: Colors.white,
        },
        subtitle1: {
            ...myTheme.typography.subtitle1,
            color: "#ffffff",
        },
        h1: {
            ...myTheme.typography.h1,
            color: '#c7a072'
        },
        h2: {
            ...myTheme.typography.h2,
            color: Colors.white,
            a: {
                color: Colors.white,
            },
        },
        h3: {
            ...myTheme.typography.h3,
            color: Colors.white
        },
    },
    components: {
        ...myTheme,
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    '&:hover': {
                        color: '#ffffff',
                        background: 'transparent',
                      },
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: Colors.primary.main
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    background: Colors.primary.main,
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                    background: Colors.secondary.main,
                    '&:hover': {
                        background: '#9ca8c7',
                      },
                }
            }
        },
        MuiListItem: {
            // ...myTheme.components.MuiListItem,
            styleOverrides: {
                root: {
                    color: Colors.white,
                    borderWidth: 0,
                    borderBottomWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: Colors.borderColors,
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#ffffff',
                        borderColor: '#ffffff',
                        color: '#ffffff',
                      },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#c3b0a5',
                        color: '#ffffff'
                      },
                },
            },
        },
    },
});







const StyledTagButton = styled(Button)(() => ({
    backgroundColor: Colors.secondary.main,
    color: '#ffffff',
    ":hover": {
        backgroundColor: Colors.secondary.main,
        color: '#ffffff',
    }
  }));

  

  const AddListItem = styled(ListItem)(() => ({
    color: Colors.white,
    padding: '10px 20px 0px 20px',
}));




  const IconStyle = {
    color: '#a4a2a1',
  };



  const AddButton = styled(Button)(() => ({
    color: myTheme.palette.secondary.main,
    ":hover": {
        color: Colors.secondary.main,
        background: 'transparent',
    }
  }));

  const DeleteButton = styled(Button)(() => ({
    background: 'transparent',
    ":hover": {
        color: Colors.secondary.main,
        background: 'transparent',
    }
  }));


  const ZutatenCard = styled(Card)(() => ({
    background: Colors.white,
  }));



  const AddList = styled(List)(() => ({
    background: Colors.white,
  }));



  



export { Colors, darkTheme, IconStyle, AddList, DeleteButton, AddListItem, StyledTagButton, AddButton, ZutatenCard };