import {createMuiTheme, Theme} from "@material-ui/core";
import {blue, grey, yellow} from "@material-ui/core/colors";

export const defaultTheme: Theme = createMuiTheme({
    palette: {
        primary: {
            light: blue[200],
            main: blue[600],
            dark: blue[800],
            contrastText: grey[50]

        },
    },
    typography: {
        fontFamily: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            "sans-serif"].join(","),
    }
});

export const authenticatedTheme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: yellow["A700"],
            contrastText: grey[900]

        },
    },
    typography: {
        fontFamily: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            "sans-serif"].join(","),
    }
})