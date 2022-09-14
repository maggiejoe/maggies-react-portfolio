import React from 'react';

// react bootstrap imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function P3Modal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton className="border-dark">
            <Modal.Title className="" id="modal-title">
                Trip It
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="container">
            <p>
                Project Overview: < br/>
                Trip It makes your vacation booking needs easier! We put everything you need to plan a great vacation all in one spot!
            </p>

            <br />

            <p>
                Technologies Used: < br/>
                HTML, CSS, Bulma, JavaScript, API Integration
            </p>
        </Modal.Body>
        <Modal.Footer className="modal-bg border-dark">
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://p1group5.github.io/trip-it/'>View live app here!</Button>
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://github.com/P1Group5/trip-it.git'>
                <span className='bi bi-github work-icon'></span>
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default P3Modal;