import React from 'react';

// react bootstrap imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function P1Modal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton className="border-dark">
            <Modal.Title className="" id="modal-title">
                First Portfolio
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="container">
            <p>
                Project Overview: < br/>
                This was one of my first assignments with the University of Toronto where I showcase my HTML and CSS skills to create a basic user friendly Portfolio
            </p>

            <br />

            <p>
                Technologies Used: < br/>
                HTML, CSS
            </p>
        </Modal.Body>
        <Modal.Footer className="modal-bg border-dark">
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://maggiejoe.github.io/Portfolio/'>View live app here!</Button>
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://github.com/maggiejoe/Portfolio.git'>
                <span className='bi bi-github work-icon'></span>
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default P1Modal;