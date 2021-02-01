import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/OrakelOsloMet">
                Orakel OsloMet
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default Copyright;