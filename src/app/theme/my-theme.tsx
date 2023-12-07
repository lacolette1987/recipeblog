import styled from "@emotion/styled";
import { Button, Card, CardMedia, Container, List, ListItem, createTheme } from "@mui/material";



  
const myTheme = createTheme({
    palette: {
        primary: {
            light: '#7e6559',
            main: '#7e6559',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
          light: '#e69f76',
          main: '#498cb5',
          dark: '#000000',
          contrastText: '#ffffff',
        },
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
                        color: '#0000000',
                        background: 'transparent',
                      },
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '30px 20px 40px 20px',
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
                    color: '#ffffff',
                    background: '#7e6559',
                    '&:hover': {
                        background: '#000000',
                      },
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
                    borderColor: '#7e6559',
                    borderWidth: '1px',
                    color: '#7e6559',
                    '&:hover': {
                        backgroundColor: '#7e6559',
                        borderColor: '#7e6559',
                        color: '#ffffff',
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
                        backgroundColor: '#7e6559',
                        color: '#ffffff'
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
            color: '#000000',
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
            color: "#987648",
            letterSpacing: 0,
        },
        h1: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontSize: 40,
            marginBottom: 20,
            lineHeight: 1.4,
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: '#351a0f'
        },
        h2: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 600,
            fontSize: 26,
            marginBottom: 10,
            textTransform: "uppercase",
            letterSpacing: 1.7,
            color: '#351a0f'
        },
        h3: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 400,
            fontSize: 24,
            marginBottom: 10,
            marginTop: 4,
            textTransform: "uppercase",
            letterSpacing: 1,
            color: '#351a0f',
            a: {
                color: '#000000',
                textDecoration: 'none',
            },
        },
        h4: {
            fontWeight: 600,
            fontSize: 18,
        },
        h5: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 600,
            fontSize: 18,
            marginBottom: 5,
            marginTop: 4,
            textTransform: "uppercase",
            letterSpacing: 1,
        },
        },
});



const TagButton = styled(Button)(() => ({
    backgroundColor: myTheme.palette.secondary.main,
    borderRadius: '20px',
    fontSize: '12px',
    margin: '0px 8px 8px 0px',
    fontWeight: '700',
    letterSpacing: 0.7,
    padding: '6px 15px 4px 15px',
    color: '#ffffff',
    ":hover": {
        backgroundColor: myTheme.palette.secondary.dark,
        color: '#ffffff',
    }
  }));

  

  const AddListItem = styled(ListItem)(() => ({
    color: '#d32c26 !important',
    padding: '10px 20px 0px 20px',
}));


  const IconStyle = {
    color: '#a4a2a1',
  };



  const AddButton = styled(Button)(() => ({
    padding: '10px 0px 0px 0',
    margin: 0,
    border: 0,
    color: myTheme.palette.secondary.main,
    ":hover": {
        border: 0,
        color: myTheme.palette.secondary.dark,
        background: 'transparent',
    }
  }));


  const MainImage = styled(CardMedia)(() => ({
    margin: '0px',
    padding: '0px',
  }));



  const ZutatenCard = styled(Card)(() => ({
    margin: '0px 0px 30px 0px',
    background: '#ffffff',
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
    background: '#ffffff',
  }));



  const ReadmoreButton = styled(Button)(() => ({
    margin: '0px',
    '&:hover': {
        backgroundColor: myTheme.palette.secondary.main,
        borderColor: myTheme.palette.secondary.main,
        color: '#ffffff',
      },
}));





export { IconStyle, AddList, MainContainer, AddListItem, TagButton, ReadmoreButton, ZutatenCard, AddButton, FooterContainer, MainImage, myTheme };
