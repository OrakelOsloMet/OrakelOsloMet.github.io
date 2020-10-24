import React from "react";
import {connect} from "react-redux";
import {Navbar} from "react-bootstrap";

import * as actions from "../../../store/actions/actionIndex";
import Nav from "react-bootstrap/Nav";

import {USER_GUIDE_PATH} from "../../../constants/constants";
import {SwalInfoModal} from "../../UI/Modals/SwalModals/SwalModals";

const navbar = (props) => {

    const showDiscordMessage = () => {
        SwalInfoModal("Discord",
            "For digital veiledning benytter vi oss av Discord, og har vår egen server til dette. Inne på serveren " +
            "setter vi pris på om du leser informasjonen i tekstkanalen kalt informasjon, og vi anbefaler alle å laste " +
            "ned klienten deres i stedet for å bruke tjenesten gjennom nettleseren.",
            "https://discord.gg/jgzqYpX",
            "Orakel Discord");
    };

    const showErrorReportingMessage = () => {
        SwalInfoModal(
            "Feilrapportering",
            "Orakels køsystem er et fritidsprosjekt som er bygget og vedlikeholdt av en person. Det er derfor " +
            "en viss fare for bugs og feil. Disse kan rapporteres ved å legge inn en issue på GitHub-repoet, eller " +
            "ved å ta kontakt med Fredrik Pedersen. Vi setter også pris på ønsker om tilleggsfunksjonalitet :) ",
            "https://github.com/OrakelOsloMet/Orakel_Queue_Client/issues",
            "GitHub Repo");
    };

    const showAboutMessage = () => {
        SwalInfoModal("Om Orakels Køsystem", "Coming Soon!", USER_GUIDE_PATH, "Brukerveiledning");
    };

    let fontStyle = props.isAuthenticated ? {color: "black"} : {color: "white"};
    let buttonStyle = props.isAuthenticated ? {background: "none", border: "none", color: "black", width: "auto"} :
        {background: "none", border: "none", color: "white", width: "auto"};

    const loginButton =
        <Nav.Link>
            <button
                style={buttonStyle}
                onClick={props.showLoginModal}>
                <strong>Admin</strong>
            </button>
        </Nav.Link>;

    const logoutButton =
        <Nav.Link>
            <button
                style={buttonStyle}
                onClick={props.logoutHandler}>
                <strong>Logg Ut</strong>
            </button>
        </Nav.Link>;

    let loginPrompt = props.isAuthenticated ? logoutButton : loginButton;
    let navbarProps = props.isAuthenticated ? {bg: "warning"} : {bg: "primary", variant: "dark"};
    
    return (
        <Navbar {...navbarProps} expand="lg">
            <Navbar.Brand>
                <img
                    alt=""
                    src={require(props.isAuthenticated ? "../../../assets/images/oslometsvart.png" : "../../../assets/images/oslomethvit.png")}
                    width="140"
                    height="90"
                />
            </Navbar.Brand>
            <Navbar.Brand href="#home"><h2 style={fontStyle}><strong>Orakel</strong></h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={fontStyle} onClick={showDiscordMessage}><strong>Discord</strong></Nav.Link>
                    <Nav.Link style={fontStyle} onClick={showErrorReportingMessage}><strong>Feilrapportering</strong></Nav.Link>
                    <Nav.Link style={fontStyle} onClick={showAboutMessage}><strong>Om</strong></Nav.Link>
                    {loginPrompt}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showLoginModal: () => dispatch(actions.toggleLoginModal(false)),
        logoutHandler: () => dispatch(actions.logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);