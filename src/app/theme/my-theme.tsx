import styled from "@emotion/styled";
import { Button, Card, CardMedia, Container, Grid, createTheme } from "@mui/material";



const TagButton = styled(Button)(() => ({
    backgroundColor: '#d1b894',
    borderRadius: '20px',
    fontSize: '12px',
    margin: '0px 8px 8px 0px',
    fontWeight: '700',
    letterSpacing: 0.7,
    padding: '4px 13px 3px 13px',
    color: '#ffffff',
    fontFamily: 'Work Sans, sans-serif',
    ":hover": {
        backgroundColor: '#6b4829',
    }
  }));
  
  const FooterButton = styled(Button)(() => ({
    padding: '0',
    margin: '0px 40px 0px 0px',
    a: {
        color: '#000000',
        textDecoration: 'none',
    },
}));

  const IconStyle = {
    color: '#a4a2a1',
  };



  const AddButton = styled(Button)(() => ({
    padding: '15px 0px 0px 0',
    margin: 0,
    border: 0,
    color: '#8e735b',
    ":hover": {
        border: 0,
        backgroundColor: '#f5f5f5',
    }
  }));


  const MainImage = styled(CardMedia)(() => ({
    margin: '0px',
    padding: '0px',
  }));




  const ZutatenCard = styled(Card)(() => ({
    margin: '30px 0px 40px 0px',
  }));


  const FooterContainer = styled(Container)(() => ({
    paddingTop: '25px',
    paddingBottom: '10px',
  }));


  const MainContainer = styled(Container)(() => ({
    paddingTop: '60px',
    paddingBottom: '80px',
  }));



  const ReadmoreButton = styled(Button)(() => ({
    margin: '10px 0px 0px 0px',
  }));





  
const myTheme = createTheme({
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
                    color: '#ffffff',
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
                    padding: '25px',
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    position: 'fixed',
                    right: '30px',
                    zIndex: 9999,
                    bottom: '30px'
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
        MuiListItem: {
            styleOverrides: {
                root: {
                    padding: '6px 0px',
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: '0px 0px 10px 0px',
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
                    padding: '8px 25px 6px 25px',
                    fontFamily: 'Josefin Sans, sans-serif',
                    borderColor: '#000000',
                    borderWidth: '1px',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#d1b894'
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
                        backgroundColor: '#d1b894',
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
        },
        body2: {
            fontSize: 18,
            lineHeight: 1.5,
            marginBottom: 10,
            color: '#ffffff',
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
            color: "#8e735b",
            letterSpacing: 0,
        },
        h1: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontSize: 33,
            marginBottom: 10,
            lineHeight: 1.4,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
        },
        h2: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 600,
            fontSize: 28,
            marginBottom: 10,
            textTransform: "uppercase",
            letterSpacing: 1.7
        },
        h3: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 600,
            fontSize: 22,
            marginBottom: 10,
            marginTop: 4,
            textTransform: "uppercase",
            letterSpacing: 1,
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
    palette: {
        // mode: mode,
        primary: {
            light: '#000000',
            main: '#000000',
            dark: '#ffffff',
            contrastText: '#ffffff',
        },
        secondary: {
          light: '#d1b894',
          main: '#593d24',
          dark: '#382f1f',
          contrastText: '#ffffff',
        },
        background: {
          default: '#f5f5f5',
        },
    },
});

export { IconStyle, MainContainer, FooterButton, TagButton, ReadmoreButton, ZutatenCard, AddButton, FooterContainer, MainImage, myTheme };
