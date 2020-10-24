import React from "react";
import {connect} from "react-redux";
import {Form, FormControl, Navbar} from "react-bootstrap";

import * as actions from "../../../store/actions/actionIndex";
import Nav from "react-bootstrap/Nav";

import {swalInfoModal} from "../../UI/Modals/SwalModals/SwalModals";
import {objectConditionalByEnvironment} from "../../../utilities/objectUtilities";

//TODO Find out how to use variables inside the innerHTML's anchor tag's href-attribute. Then move the whole declaration
// TODO of hyperlink inside swalInfoModal. This is starting to get cumbersome.
const navbar = (props) => {

    const showDiscordMessage = () => {
        const hyperlink = document.createElement("div");
        hyperlink.innerHTML = "<strong><a href='https://discord.gg/jgzqYpX' target='_blank'>Orakels Discord</a></strong>";

        swalInfoModal("Discord", "For digital veiledning benytter vi oss av Discord, og har vår egen server til dette. Inne på serveren " +
            "setter vi pris på om du leser informasjonen i tekstkanalen kalt informasjon, og vi anbefaler alle å laste " +
            "ned klienten deres i stedet for å bruke tjenesten gjennom nettleseren.", hyperlink);
    };

    const showErrorReportingMessage = () => {
        const hyperlink = document.createElement("div");
        hyperlink.innerHTML = "<strong><a href='https://github.com/OrakelOsloMet/Orakel_Queue_Client/issues' target='_blank'>GitHub Repo</a></strong>";

        swalInfoModal("Feilrapportering", "Orakels køsystem er et fritidsprosjekt som er bygget og vedlikeholdt av en person. Det er derfor " +
            "en viss fare for bugs og feil. Disse kan rapporteres ved å legge inn en issue på GitHub-repoet, eller " +
            "ved å ta kontakt med Fredrik Pedersen. Vi setter også pris på ønsker om tilleggsfunksjonalitet :) ", hyperlink);
    };

    const showAboutMessage = () => {
        const hyperlink = document.createElement("div");
        hyperlink.innerHTML = objectConditionalByEnvironment("<strong><a href='localhost:8080/api/resources/userguide' target='_blank'>Brukerveiledning</a></strong>", "<strong><a href='https://orakelqueueservice.herokuapp.com/api/resources/userguide' target='_blank'>Brukerveiledning</a></strong>");

        swalInfoModal("Om Orakels Køsystem", "Coming Soon!", hyperlink);
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
                    <Nav.Item>{loginPrompt}</Nav.Item>
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