import { createTheme } from "@mui/material";





const myTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
              body {
                margin: 0;
              }
            `,
          },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 0,
              fontWeight: 400,
              fontSize: 17,
              letterSpacing: 1.4,
              paddingTop: 10,
              paddingBottom: 8,
              paddingLeft: 20,
              paddingRight: 20,
              fontFamily: 'Work Sans, sans-serif',
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
            fontSize: 25,
            lineHeight: 1.3,
            marginBottom: 10,
            fontWeight: 700,
            fontFamily: 'Quattrocento, serif',
        },
        subtitle1: {
            fontSize: 18,
            lineHeight: 1.3,
            marginBottom: 10,
            fontWeight: 700,
            color: "#4f2f20",
        },
        subtitle2: {
            fontSize: 18,
            lineHeight: 1.3,
            marginBottom: 10,
            color: "#eeeeee",
        },
        h1: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontSize: 33,
            marginBottom: 20,
            lineHeight: 1.4,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
        },
        h2: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 600,
            fontSize: 30,
            marginBottom: 10,
            textTransform: "uppercase",
            letterSpacing: 1.7
        },
        h3: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 600,
            fontSize: 22,
            marginBottom: 15,
            marginTop: 4,
            textTransform: "uppercase",
            letterSpacing: 1.1,
            a: {
                color: '#000000',
                textDecoration: 'none',
            },
        },
        h4: {
            fontSize: 17,
            marginBottom: 10,
            color: '#4f2f20',
            fontWeight: 600,
        },
    },
    palette: {
        // mode: 'dark',
        primary: {
            light: '#757ce8',
            main: '#000000',
            dark: '#002884',
            contrastText: '#fff',
                },
          secondary: {
            main: '#4f2f20',
          },
          
          background: {
            default: '#f5f5f5',
        },
    },
});


export default myTheme;
