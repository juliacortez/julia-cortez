import { createTheme } from "@mui/material"
import { neutralColor, primaryColor, secondaryColor } from "./colors"

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white"
        },
        secondary: {
            main: secondaryColor,
            contrastText: "white"
        },
        text: {
            primary: neutralColor
        }
    }
})

export default theme