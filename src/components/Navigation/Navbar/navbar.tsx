import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {USER_GUIDE_PATH, ADMIN_ROUTE, INDEX_ROUTE} from "../../../constants/constants";

import SwalInfoModal from "../../UI/Modals/SwalModals/swalInfoModal";
import SwalLoginModal from "../../UI/Modals/SwalModals/swalLoginModal";
import {AuthDispatch} from "../../../store/types";
import useStyles from "./navbarStyles";
import {AccountCircle} from "@material-ui/icons";
import {Button, IconButton} from "@material-ui/core";
import {Link} from "react-router-dom";

type Props = {
    onLoginSubmit: (username: string, password: string) => (dispatch: AuthDispatch) => Promise<boolean | undefined>;
    clearLoginError: () => void;
    logoutHandler: () => void;
    isAuthenticated: boolean;
}

const Navbar: React.FC<Props> = (props) => {
    const classes = useStyles();


    const showDiscordMessage = () =>
        SwalInfoModal({
            title: "Discord",
            contentText: "For digital veiledning benytter vi oss av Discord, og har vår egen server til dette. Inne på serveren setter vi pris på om du leser informasjonen i tekstkanalen kalt informasjon, og vi anbefaler alle å laste ned klienten deres i stedet for å bruke tjenesten gjennom nettleseren.",
            url: "https://discord.gg/jgzqYpX",
            hyperlinkText: "Orakel Discord"
        })

    const showErrorReportingMessage = () =>
        SwalInfoModal({
            title: "Feilrapportering",
            contentText: "Orakels køsystem er et fritidsprosjekt som er bygget og vedlikeholdt av en person. Det er derfor en viss fare for bugs og feil. Disse kan rapporteres ved å legge inn en issue på GitHub-repoet, eller ved å ta kontakt med Fredrik Pedersen. Vi setter også pris på ønsker om tilleggsfunksjonalitet :)",
            url: "https://github.com/OrakelOsloMet/Orakel_Queue_Client/issues",
            hyperlinkText: "GitHub Repo"
        })

    const showAboutMessage = () =>
        SwalInfoModal({
            title: "Om Orakels Køsystem",
            contentText: "Coming Soon!",
            url: USER_GUIDE_PATH,
            hyperlinkText: "Brukerveiledning"
        })

    const swalLogin = () => {
        SwalLoginModal({onLoginSubmit: props.onLoginSubmit, clearLoginError: props.clearLoginError})
    }

    const imagePath = require(props.isAuthenticated ? "../../../assets/images/oslometsvart.png" : "../../../assets/images/oslomethvit.png");

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <img className={classes.logo} src={imagePath}/>
                    <Typography className={classes.title} variant="h2" >Orakel</Typography>

                    <Button className={classes.button} component={Link} to={INDEX_ROUTE} >Hjem</Button>
                    <Typography className={classes.title} variant="h3" >-</Typography>
                    <Button className={classes.button} onClick={showDiscordMessage}>Discord</Button>
                    <Typography className={classes.title} variant="h3" >-</Typography>
                    <Button className={classes.button} onClick={showAboutMessage}>Om</Button>
                    {props.isAuthenticated ? <Typography className={classes.title} variant="h3" >-</Typography> : null}
                    {props.isAuthenticated ? <Button className={classes.button} component={Link} to={ADMIN_ROUTE} >Admin</Button> : null}

                    <div className={classes.grow} />

                    {props.isAuthenticated
                        ? <Button className={classes.button} onClick={props.logoutHandler}>Logg ut</Button>
                        : <IconButton className={classes.iconButton} color="inherit" onClick={swalLogin}><AccountCircle /></IconButton>}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;