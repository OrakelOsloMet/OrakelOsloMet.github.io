import React from "react";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const navbar = (props) => {

    const loggedInText = (username) => {
        return <p style={{color: "white", width: "150px", height: "20px", fontWeight: "bold"}}>Welcome {username}</p>
    };

    const loginButton =
        <Nav.Link>
            <button
                style={{background: "none", border: "none", color: "white", width: "100px", height: "40px"}}
                onClick={props.handleLoginClick}>
                <strong>Logg Inn</strong>
            </button>
        </Nav.Link>;

    const logoutButton =
        <Nav.Link>
            <button
                style={{background: "none", border: "none", color: "white", width: "100px", height: "40px"}}
                onClick={props.handleLogoutClick}>
                <strong>Logg Ut</strong>
            </button>
        </Nav.Link>;

    let loginPrompt = props.user ? logoutButton : loginButton;
    let welcomeText = props.user ? loggedInText(props.user.username) : null;


    return (
        <Navbar bg="primary" variant="dark">
            <Nav className="container-fluid">
                <Nav.Item>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={require("../../../assets/images/oslomethvit.png")}
                            width="150"
                            height="100"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </Nav.Item>
                <Nav.Item>
                    <h2 style={{color: "white"}}><strong>Orakel - Køsystem</strong></h2>
                </Nav.Item>
                <Nav.Item className="ml-auto">
                    {welcomeText}
                    {loginPrompt}
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default navbar;