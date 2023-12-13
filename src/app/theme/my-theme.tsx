import styled from "@emotion/styled";
import { Button, Card, CardMedia, Container, List, ListItem, createTheme } from "@mui/material";



const Colors = {
    black: '#000000',
    white: '#ffffff',
    borderColors: '#e0e0e0',
    lightgrey: '#dddddd',
    primary: {
        light: '#aea5ad',
        main: '#5e4b5b',
        dark: '#231920',
        contrastText: '#ffffff',
    },
    secondary: {
        light: '#e0d0bb',
        main: '#c1a178',
        dark: '#835635',
        contrastText: '#ffffff',
}
  }



  
const myTheme = createTheme({
    palette: {
        background: {
          default: '#f5f5f5',
        },
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1300,
          xl: 1536,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                body {
                    margin: 0;
                }
            `,
        },
        
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    '&:hover': {
                        color: Colors.black,
                        background: 'transparent',
                      },
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    background: Colors.white,
                    padding: '30px 30px',
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    position: 'fixed',
                    right: '30px',
                    zIndex: 9999,
                    bottom: '30px',
                    color: Colors.white,
                    background: Colors.primary.main,
                    '&:hover': {
                        background: Colors.primary.dark,
                      },
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: Colors.primary.main,
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                }
            }
        },
        MuiRating: {
            styleOverrides: {
                root: {
                    paddingBottom: '20px',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: '8px 0px 6px 0px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    '&:last-child': {
                        padding: '8px 0px 0px 0px',
                        borderBottom: 0,
                      },
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: '0px 0px 10px 0px',
                    borderRadius: '0 !important',
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '0 !important',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    fontWeight: 400,
                    fontSize: 15,
                    letterSpacing: 1.3,
                    padding: '10px 25px 6px 25px',
                    fontFamily: 'Josefin Sans, sans-serif',
                    borderColor: Colors.black,
                    borderWidth: '1px',
                    color: Colors.black,
                    '&:hover': {
                        backgroundColor: Colors.black,
                        borderColor: Colors.black,
                        color: Colors.white,
                      },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    fontWeight: 400,
                    fontSize: 15,
                    textTransform: 'uppercase',
                    letterSpacing: 1.3,
                    padding: '14px 20px 10px 20px',
                    fontFamily: 'Josefin Sans, sans-serif',
                    margin: 0,
                    '&:hover': {
                        backgroundColor: '#c3b0a5',
                        color: Colors.white
                      },
                },
            },
        },
    },
        typography: {
        fontFamily: 'Quattrocento, serif',
        body1: {
            fontSize: 18,
            lineHeight: 1.5,
            marginBottom: 10,
            fontWeight: 300,
            color: Colors.black,
        },
        caption: {
            fontSize: 18,
            lineHeight: 1.3,
            marginBottom: 10,
            fontWeight: 400,
        },
        subtitle1: {
            fontSize: 15,
            lineHeight: 1.3,
            marginBottom: 15,
            fontWeight: 600,
            color: "#79708f",
            letterSpacing: 0,
        },
        h1: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontSize: 35,
            marginBottom: 20,
            lineHeight: 1.4,
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: Colors.black
        },
        h2: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 400,
            fontSize: 24,
            marginBottom: 10,
            marginTop: 4,
            textTransform: "uppercase",
            letterSpacing: 1,
            color: Colors.black,
            a: {
                color: Colors.black,
                textDecoration: 'none',
            },
        },
        h3: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 600,
            fontSize: 26,
            marginBottom: 10,
            textTransform: "uppercase",
            letterSpacing: 1.7,
            color: Colors.black
        },
        h4: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 600,
            fontSize: 18,
            marginBottom: 5,
            marginTop: 4,
            textTransform: "uppercase",
            letterSpacing: 1,
        },
        h5: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 600,
            fontSize: 18,
            marginBottom: 10,
            marginTop: 4,
            textTransform: "uppercase",
            letterSpacing: 1,
        },
        },
});



const StyledTagButton = styled(Button)(() => ({
    backgroundColor: Colors.secondary.main,
    borderRadius: '20px',
    fontSize: '12px',
    margin: '0px 8px 8px 0px',
    fontWeight: '700',
    letterSpacing: 0.7,
    padding: '7px 15px 4px 15px',
    color: Colors.white,
    ":hover": {
        backgroundColor: Colors.primary.main,
        color: Colors.white,
    }
  }));

  

  const AddListItem = styled(ListItem)(() => ({
    padding: '10px 20px 0px 20px',
}));





  const IconStyle = {
    color: '#a4a2a1',
  };



  const AddButton = styled(Button)(() => ({
    padding: '10px 0px 0px 0',
    margin: 0,
    border: 0,
    color: Colors.secondary.main,
    ":hover": {
        border: 0,
        color: Colors.secondary.dark,
        background: 'transparent',
    }
  }));

  const DeleteButton = styled(Button)(() => ({
    background: 'transparent',
    margin: 0,
    padding: 0,
    ":hover": {
        color: Colors.secondary.dark,
        background: 'transparent',
    }
  }));


  const MainImage = styled(CardMedia)(() => ({
    margin: '0px',
    padding: '0px',
  }));



  const ZutatenCard = styled(Card)(() => ({
    margin: '0px 0px 30px 0px',
    background: Colors.white,
  }));


  const FooterContainer = styled(Container)(() => ({
    paddingTop: '25px',
    paddingBottom: '10px',
  }));


  const MainContainer = styled(Container)(() => ({
    paddingTop: '60px',
    paddingBottom: '80px',
  }));



  const AddList = styled(List)(() => ({
    margin: '20px 0px',
    background: Colors.white,
  }));



  const StyledDarkButton = styled(Button)(() => ({
    margin: '0px',
    padding: '20px 0px 0px 0px',
    minWidth: 0,
    '&:hover': {
        background: 'transparent',
      },
}));

const ReadmoreButton = styled(Button)(() => ({
    margin: '0px',
    borderColor: Colors.secondary.main,
    color: Colors.secondary.main,
    '&:hover': {
        backgroundColor: Colors.secondary.main,
        borderColor: Colors.secondary.main,
        color: Colors.white,
      },
}));

  



export { Colors, IconStyle, AddList, DeleteButton, MainContainer, AddListItem, StyledTagButton, ReadmoreButton, ZutatenCard, AddButton, FooterContainer, MainImage, myTheme, StyledDarkButton };
