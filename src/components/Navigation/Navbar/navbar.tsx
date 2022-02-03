import React from "react";
import {Navbar as BootsrapNav, NavbarProps as BootstrapNavProps} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

import styles from "./navbar.module.css";

import {USER_GUIDE_PATH, ADMIN_ROUTE, INDEX_ROUTE} from "../../../constants/constants";

import SwalMessageModal from "../../UI/Modals/SwalModals/swalMessageModal";
import SwalLoginModal from "../../UI/Modals/SwalModals/swalLoginModal";
import {AuthDispatch} from "../../../store/types";

type Props = {
    onLoginSubmit: (username: string, password: string) => (dispatch: AuthDispatch) => Promise<boolean | undefined>;
    clearLoginError: () => void;
    logoutHandler: () => void;
    isAuthenticated: boolean;
}

const Navbar: React.FC<Props> = (props) => {

    const showDiscordMessage = () =>
        SwalMessageModal({
            title: "Discord",
            iconType: "info",
            contentText: "For digital veiledning benytter vi oss av Discord, og har vår egen server til dette. Inne på serveren setter vi pris på om du leser informasjonen i tekstkanalen kalt informasjon, og vi anbefaler alle å laste ned klienten deres i stedet for å bruke tjenesten gjennom nettleseren.",
            url: "https://discord.gg/jgzqYpX",
            hyperlinkText: "Orakel Discord"
        })

    const showErrorReportingMessage = () =>
        SwalMessageModal({
            title: "Feilrapportering",
            iconType: "info",
            contentText: "Orakels køsystem er et fritidsprosjekt som er bygget og vedlikeholdt av en person. Det er derfor en viss fare for bugs og feil. Disse kan rapporteres ved å legge inn en issue på GitHub-repoet, eller ved å ta kontakt med Fredrik Pedersen. Vi setter også pris på ønsker om tilleggsfunksjonalitet :)",
            url: "https://github.com/OrakelOsloMet/Orakel_Queue_Client/issues",
            hyperlinkText: "GitHub Repo"
        })

    const showAboutMessage = () =>
        SwalMessageModal({
            title: "Om Orakels Køsystem",
            iconType: "info",
            contentText: "Coming Soon!",
            url: USER_GUIDE_PATH,
            hyperlinkText: "Brukerveiledning"
        })

    const swalLogin = () => {
        SwalLoginModal({onLoginSubmit: props.onLoginSubmit, clearLoginError: props.clearLoginError})
    }

    const linkStyle = props.isAuthenticated ? styles.authenticatedLinkText : styles.defaultLinkText;
    const navbarProps: BootstrapNavProps = props.isAuthenticated ? {expand: "lg", bg: "warning"} : {
        variant: "dark",
        expand: "lg",
        bg: "primary"
    };

    const loginButton =
        <Nav.Link
            className={linkStyle}
            onClick={props.isAuthenticated ? props.logoutHandler : swalLogin}>
            {props.isAuthenticated ? "Logg Ut" : "Logg Inn"}
        </Nav.Link>;


    return (
        <BootsrapNav {...navbarProps}>
            <BootsrapNav.Brand className={styles.invisibleOnMobile}>
                <img
                    className={styles.brandImage}
                    alt="OsloMet Logo"
                    src={require(props.isAuthenticated ? "../../../assets/images/oslometsvart.png" : "../../../assets/images/oslomethvit.png")}
                />
            </BootsrapNav.Brand>
            <LinkContainer to={INDEX_ROUTE}>
                <Nav.Link>
                    <BootsrapNav.Brand
                        className={props.isAuthenticated ? styles.authenticatedBrandText : styles.brandText}>Orakel
                    </BootsrapNav.Brand>
                </Nav.Link>
            </LinkContainer>
            <BootsrapNav.Toggle aria-controls="responsive-navbar-nav"/>
            <BootsrapNav.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link className={linkStyle} onClick={showDiscordMessage}>Discord</Nav.Link>
                    <Nav.Link className={linkStyle} onClick={showErrorReportingMessage}>Feilrapportering</Nav.Link>
                    <Nav.Link className={linkStyle} onClick={showAboutMessage}>Om</Nav.Link>
                    {props.isAuthenticated ? <LinkContainer to={ADMIN_ROUTE}><Nav.Link className={linkStyle}>Admin</Nav.Link></LinkContainer> : null}
                    {loginButton}
                </Nav>
            </BootsrapNav.Collapse>
        </BootsrapNav>
    );
};

export default Navbar;