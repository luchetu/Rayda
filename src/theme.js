import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1760a5",
        },
        secondary: {
            main: '#15c630',
        },
        otherColor: {
            main: "#999"
        }
    },
    typography: {
        fontFamily: [
            'IBM Plex Sans',
            'sans-serif'
        ].join(','),
        title: {
            fontStyle: "SemiBold",
            fontSize: "30px",
            LineHeight: "38px"
        },
        text: {
            fontSize: 16,
            font: "IBM Plex Sans",
            color: "#475467",

        }
    },
})