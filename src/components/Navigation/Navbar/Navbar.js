import React from "react";
import {connect} from "react-redux";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import * as actions from "../../../store/actions/actionIndex";
import styles from "./Navbar.module.css";
import {USER_GUIDE_PATH} from "../../../constants/constants";

import SwalInfoModal from "../../UI/Modals/SwalModals/SwalInfoModal";
import SwalLoginModal from "../../UI/Modals/SwalModals/SwalLoginModal";

const navbar = (props) => {

    const showDiscordMessage = () =>
        SwalInfoModal({
            title: "Discord",
            contentText: "For digital veiledning benytter vi oss av Discord, og har vår egen server til dette. Inne på serveren setter vi pris på om du leser informasjonen i tekstkanalen kalt informasjon, og vi anbefaler alle å laste ned klienten deres i stedet for å bruke tjenesten gjennom nettleseren.",
            url: "https://discord.gg/jgzqYpX",
            hyperlinkText: "Orakel Discord"})

    const showErrorReportingMessage = () =>
        SwalInfoModal({
            title: "Feilrapportering",
            contentText: "Orakels køsystem er et fritidsprosjekt som er bygget og vedlikeholdt av en person. Det er derfor en viss fare for bugs og feil. Disse kan rapporteres ved å legge inn en issue på GitHub-repoet, eller ved å ta kontakt med Fredrik Pedersen. Vi setter også pris på ønsker om tilleggsfunksjonalitet :)",
            url: "https://github.com/OrakelOsloMet/Orakel_Queue_Client/issues",
            hyperlinkText: "GitHub Repo"})

    const showAboutMessage = () =>
        SwalInfoModal({
        title: "Om Orakels Køsystem",
        contentText: "Coming Soon!",
        url: USER_GUIDE_PATH,
        hyperlinkText: "Brukerveiledning"})

    const swalLogin = () => {
        SwalLoginModal({onLoginSubmit: props.onLoginSubmit, clearLoginError: props.clearLoginError, errorMessage: props.logInFailed ? props.logInFailed : null})
    }

    const linkStyle = props.isAuthenticated ? styles.authenticatedLinkText : styles.defaultLinkText;
    const navbarProps = props.isAuthenticated ? {bg: "warning", expand: "lg"} : {bg: "primary", variant: "dark", expand: "lg"};

    const loginButton =
        <Nav.Link
            className={linkStyle}
            onClick={props.isAuthenticated ? props.logoutHandler : swalLogin}>
            {props.isAuthenticated ? "Logg Ut" : "Admin"}
        </Nav.Link>;

    if (props.logInFailed) {
        swalLogin();
    }

    return (
        <Navbar {...navbarProps}>
            <Navbar.Brand className={styles.invisibleOnMobile}>
                <img
                    className={styles.brandImage}
                    alt="OsloMet Logo"
                    src={require(props.isAuthenticated ? "../../../assets/images/oslometsvart.png" : "../../../assets/images/oslomethvit.png")}
                />
            </Navbar.Brand>
            <Navbar.Brand
                className={props.isAuthenticated ? styles.authenticatedBrandText : styles.brandText}>Orakel</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link className={linkStyle} onClick={showDiscordMessage}>Discord</Nav.Link>
                    <Nav.Link className={linkStyle} onClick={showErrorReportingMessage}>Feilrapportering</Nav.Link>
                    <Nav.Link className={linkStyle} onClick={showAboutMessage}>Om</Nav.Link>
                    {loginButton}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        logInFailed: state.auth.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginSubmit: (username, password) => dispatch(actions.auth(username, password)),
        clearLoginError: () => dispatch(actions.clearError()),
        logoutHandler: () => dispatch(actions.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);