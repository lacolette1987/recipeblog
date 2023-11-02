import { createTheme } from "@mui/material";


const myTheme = createTheme({
    typography: {
        fontFamily: 'AR One Sans, sans-serif',
        body1: {
            fontSize: 19,
            marginBottom: 10,
        },
        body2: {
            fontSize: 17,
            marginBottom: 10,
            color: '#000000',
        },
        h1: {
            fontFamily: 'Suez One, sans-serif',
            fontSize: 40,
            marginBottom: 20,
        },
        h2: {
            fontFamily: 'Suez One, sans-serif',
            fontSize: 30,
            marginBottom: 10,
        },
        h3: {
            fontFamily: 'Suez One, sans-serif',
            fontSize: 25,
            marginBottom: 10,
        },
    },
    palette: {
        primary: {
            main: '#FF5733',
        },
        background: {
            default: '#f5f5f5',
        },
    },
});


export default myTheme;