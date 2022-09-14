import React from 'react';

// react bootstrap imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function P6Modal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton className="border-dark">
            <Modal.Title className="" id="modal-title">
                The Lazy Plant Caretaker
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="container">
            <p>
                Project Overview: < br/>
                Need help finding the right house plants for your home or workspace? The Lazy Plant Caretaker is your ultimate guide to becoming a green thumb!
            </p>

            <br />

            <p>
                Technologies Used: < br/>
                HTML, CSS, BootStrap, JavaScript, Handlebars.js, RESTful Api's, mySQL, Node.js
            </p>
        </Modal.Body>
        <Modal.Footer className="modal-bg border-dark">
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://lazy-plant-caretaker.herokuapp.com/'>View live app here!</Button>
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='hhttps://github.com/project02group12/lazy-plant-caretaker.git'>
                <span className='bi bi-github work-icon'></span>
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default P6Modal;