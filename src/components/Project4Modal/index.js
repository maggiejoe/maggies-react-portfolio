import React from 'react';

// react bootstrap imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function P4Modal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton className="border-dark">
            <Modal.Title className="" id="modal-title">
                Project Generator
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="container">
            <p>
                Project Overview: < br/>
                Are you looking to create secure passwords that are nearly impossible to hack? This password generator is the perfect application for that! Whatever criteria you need to meet, this app will give you the perfect secure password!
            </p>

            <br />

            <p>
                Technologies Used: < br/>
                HTML, CSS, JavaScript
            </p>
        </Modal.Body>
        <Modal.Footer className="modal-bg border-dark">
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://maggiejoe.github.io/password-generator/'>View live app here!</Button>
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://github.com/maggiejoe/password-generator.git'>
                <span className='bi bi-github work-icon'></span>
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default P4Modal;