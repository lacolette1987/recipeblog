import { createTheme } from "@mui/material";


const myTheme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 17,
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