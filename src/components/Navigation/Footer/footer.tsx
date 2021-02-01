import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from "../../Elements/Copyright/Copyright";
import PanToolRoundedIcon from '@material-ui/icons/PanToolRounded';
import useStyles from "./useStyles";

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">This is not the footer you are looking for. <PanToolRoundedIcon/></Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}

export default Footer;