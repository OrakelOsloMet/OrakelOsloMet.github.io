import React from "react";
import Modal from "react-bootstrap/Modal";
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
                <button className="btn btn-danger" onClick={props.onHide}>Lukk</button>
                <button type="Success" className="btn btn-primary" disabled={!props.formIsValid}
                        onClick={props.loginHandler}>Logg
                    Inn</button>
            </Modal.Footer>
        </Modal>
    );
};

export default FormModal;