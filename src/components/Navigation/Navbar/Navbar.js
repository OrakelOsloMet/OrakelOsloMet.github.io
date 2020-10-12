import React from "react";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import swal from "sweetalert";

const navbar = (props) => {

    const showInfoMessage = () => {
        const hyperlink = document.createElement("div");
        hyperlink.innerHTML = "<a href='https://github.com/OrakelOsloMet/Orakel_Queue_Client/issues' target='_blank'>GitHub Repo</a>";

        swal({
                title: "Feil eller Mangel rapportering",
                text: "Orakels køsystem er et fritidsprosjekt som er bygget og vedlikeholdt av en person. Det er derfor " +
                    "en viss fare for bugs og feil. Disse kan rapporteres ved å legge inn en issue på GitHub-repoet, eller " +
                    "ved å ta kontakt med Fredrik Pedersen. Vi setter også pris på ønsker om tilleggsfunksjonalitet :) ",
                content: hyperlink,
                icon: "info",
                button: "Ok"
            }
        );
    };

    const showAboutMessage = () => {
        swal({
                title: "Om Orakels Køsystem",
                text: "Comming Soon!",
                icon: "info",
                button: "Ok"
            }
        );
    };

    let fontStyle = props.user ? {color: "black"} : {color: "white"}
    let buttonStyle = props.user ? {background: "none", border: "none", color: "black", width: "100px", height: "40px"} :
        {background: "none", border: "none", color: "white", width: "100px", height: "40px"}

    const loginButton =
        <Nav.Link>
            <button
                style={buttonStyle}
                onClick={props.handleLoginClick}>
                <strong>Admin</strong>
            </button>
        </Nav.Link>;

    const logoutButton =
        <Nav.Link>
            <button
                style={buttonStyle}
                onClick={props.handleLogoutClick}>
                <strong>Logg Ut</strong>
            </button>
        </Nav.Link>;


    let loginPrompt = props.user ? logoutButton : loginButton;
    let navbarProps = props.user ? {bg: "warning"} : {bg: "primary"}

    return (
        <Navbar {...navbarProps}>
            <Nav className="container-fluid">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={require(props.user ? "../../../assets/images/oslometsvart.png" : "../../../assets/images/oslomethvit.png")}
                        width="140"
                        height="90"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav.Item><h2 style={fontStyle}><strong>Orakel</strong></h2></Nav.Item>
                <Nav.Link className="ml-5" style={fontStyle} onClick={showInfoMessage}><strong>Feilrapportering</strong></Nav.Link>
                <Nav.Link className="ml-5" style={fontStyle} onClick={showAboutMessage}><strong>Om</strong></Nav.Link>
                <Nav.Item className="ml-auto">{loginPrompt}</Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default navbar;