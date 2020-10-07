import React from "react";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import swal from "sweetalert";

const footer = (props) => {

    const showInfoMessage = () => {
        const hyperlink = document.createElement("div");
        hyperlink.innerHTML = "<a href='https://github.com/FredrikPedersen/Orakel_Queue_System_Client/issues' target='_blank'>GitHub Repo</a>";

        swal({
                title: "Feil eller Mangel rapportering",
                text: "Orakels køsystem er et fritidsprosjekt som er bygget og vedlikeholdt av en person. Det er derfor " +
                    "en viss fare for bugs og feil. Disse kan rapporteres ved å legge inn en issue på GitHub-repoet, eller " +
                    "ved å ta kontakt med Fredrik Pedersen. Vi setter også pris på ønsker om tilleggsfunksjonalitet :) ",
                content: hyperlink,
                icon: "success",
                buttons: true
            }
        );
    };

    return (
        <Navbar fixed="bottom" bg="primary" variant="dark">
            <Nav className="container-fluid">
                <Nav.Item>
                    <button
                        style={{background: "none", border: "none", color: "white", width: "300", height: "50px"}}
                        onClick={showInfoMessage}>
                        <strong>Rapporter feil eller mangler!</strong>
                    </button>
                </Nav.Item>
                <Nav.Item>
                    <h2 style={{color: "white"}}><i>Versjon: {props.versionNumber}</i></h2>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default footer;