import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../../Button/Button";
import Container from "react-bootstrap/Container";

const FormModal = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Innlogging
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    {props.form}
                    <p className="mt-4"><strong>Denne innloggingssiden er kun ment for Orakler på jobb. Er du student og
                        skal stelle deg i kø trenger du IKKE å logge inn her :)</strong></p>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button styling="btn btn-danger" clicked={props.onHide}>Lukk</Button>
                <Button btnType="Success" styling="btn btn-primary" disabled={!props.formIsValid}
                        clicked={props.loginHandler}>Logg
                    Inn</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FormModal;