import { createTheme, responsiveFontSizes } from "@mui/material";


const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#E8FC07" //yellow
        },
        secondary: {
            main: "#F5BC33" //fade-yellow
        },
        text: {
            primary: "#FFFFFF", //white
            secondary: "#E8FC07", //yellow
            black: '#000' //black
        },
        action: {
            hover: "#E8FC07"
        }
    },
    typography: {
        fontFamily: 'PT Sans',
        fontSize: 16,
        // htmlFontSize: 16
    }
})

export const CustomTheme = responsiveFontSizes(theme)