import React from 'react';

// react bootstrap imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function P2Modal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton className="border-dark">
            <Modal.Title className="" id="modal-title">
                Code Quiz
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="container">
            <p>
                Project Overview: < br/>
                This was an assignment with the University of Toronto where I created a coding quiz that used several new technologies for a fun user experience!
            </p>

            <br />

            <p>
                Technologies Used: < br/>
                HTML, CSS, JavaScript, localStorage
            </p>
        </Modal.Body>
        <Modal.Footer className="modal-bg border-dark">
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://maggiejoe.github.io/code-quiz/'>View live app here!</Button>
            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href='https://github.com/maggiejoe/code-quiz.git'>
                <span className='bi bi-github work-icon'></span>
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default P2Modal;