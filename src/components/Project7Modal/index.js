import React from 'react';

// react bootstrap imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function P7Modal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton className="border-dark">
            <Modal.Title className="" id="modal-title">
                Eye Spy
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="container">
            <p>
                Project Overview: < br/>
                Eye Spy helps users find the perfect hidden gems for their outdoor activites. No more going on adventures and being overwhelmed with the crowds. Eye Spy ensures you have the perfect tranquil outdoor experience you're looking for!
            </p>

            <br />

            <p>
                Technologies Used: < br/>
                HTML, CSS, BootStrap, JavaScript, React, Mongoose, MongoDB, graphQL, Node.js, Express, JWT Authentication
            </p>
        </Modal.Body>
        <Modal.Footer className="modal-bg border-dark">
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://eye-spy-2022.herokuapp.com/'>View live app here!</Button>
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://github.com/CaptainNate/eye-spy.git'>
                <span className='bi bi-github work-icon'></span>
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default P7Modal;