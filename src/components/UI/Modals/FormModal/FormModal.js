import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

import {SubmitButton, CancelButton} from "../../Buttons/Buttons";

//TODO This will soon be deprecated in favour of SweetAlert Modals, don't bother refacturing.
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
                <CancelButton onClick={props.onHide}>Lukk</CancelButton>
                <SubmitButton disabled={!props.formIsValid} onClick={props.loginHandler}>Logg Inn</SubmitButton>
            </Modal.Footer>
        </Modal>
    );
};

export default FormModal;