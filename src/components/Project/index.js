// import projects into portfolio
import React, { useState } from 'react';

// react bootstrap imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// project images
import project1 from '../../assets/images/first-portfolio-500x500.png';
import project2 from '../../assets/images/code-quiz-500x500.png';
import project3 from '../../assets/images/trip-it-500x500.png';
import project4 from '../../assets/images/pass-generator-500x500.png';
import project5 from '../../assets/images/work-scheduler-500x500.png';
import project6 from '../../assets/images/plant-caretaker-500x500.png';
import project7 from '../../assets/images/eye-spy-500x500.png';

// modal components
import P1Modal from '../Project1Modal';
import P2Modal from '../Project2Modal';
import P3Modal from '../Project3Modal';
import P4Modal from '../Project4Modal';
import P5Modal from '../Project5Modal';
import P6Modal from '../Project6Modal';
import P7Modal from '../Project7Modal';

const projectData = [
    {
        id: 1,
        name: 'First Portfolio',
        photo: project1
    },
    {
        id: 2,
        name: 'Code Quiz',
        url: 'https://maggiejoe.github.io/code-quiz/',
        photo: project2
    },
    {
        id: 3,
        name: 'Trip It',
        url: 'https://p1group5.github.io/trip-it/',
        photo: project3
    },
    {
        id: 4,
        name: 'Password Generator',
        url: 'https://maggiejoe.github.io/password-generator/',
        photo: project4
    },
    {
        id: 5,
        name: 'Workday Scheduler',
        url: 'https://maggiejoe.github.io/work-day-scheduler/',
        photo: project5
    },
    {
        id: 6,
        name: 'The Lazy Plant Caretaker',
        url: 'https://lazy-plant-caretaker.herokuapp.com/',
        photo: project6
    },
    {
        id: 7,
        name: 'Eye Spy',
        url: 'https://eye-spy-2022.herokuapp.com/',
        photo: project7
    }
];


function DisplayProject() {

    const [modals] = useState([
        {
            name: 'First Portfolio'
        },
        {
            name: 'Code Quiz'
        },
        {
            name: 'Trip It'
        },
        {
            name: 'Password Generator'
        },
        {
            name: 'Workday Scheduler'
        },
        {
            name: 'The Lazy Plant Caretaker'
        },
        {
            name: 'Eye Spy'
        }
    ]);

    const [currentModals, setCurrentModals] = useState(modals[0]);

    const renderModal = () => {
        if (currentModals === 'First Portfolio') {
            return (
                <P1Modal></P1Modal>
            )
        } else if (currentModals === 'Code Quiz') {
            return (
                <P2Modal></P2Modal>
            )
        }
        else if (currentModals === 'Trip It') {
            return (
                <P3Modal></P3Modal>
            )
        }
        else if (currentModals === 'Password Generator') {
            return (
                <P4Modal></P4Modal>
            )
        }
        else if (currentModals === 'Workday Scheduler') {
            return (
                <P5Modal></P5Modal>
            )
        }
        else if (currentModals === 'The Lazy Plant Caretaker') {
            return (
                <P6Modal></P6Modal>
            )
        }
        else if (currentModals === 'Eye Spy') {
            return (
                <P7Modal></P7Modal>
            )
        }
        
    }

    // useState variables to display modals
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (

        <div className='container'>
            <div className='row'>
                {projectData.map((data) => {
                    return (
                        <div className='col-3 d-flex mb-4'>
                            <Button onClick={handleShow} className="project-card card p-0 border-5 border-dark shadow-lg">
                                <img className='card-img shadow-lg' src={data.photo} alt={data.name} >
                                </img>
                            </Button>


                        </div>
                    );
                })}
            </div>
        </div>
    )
}



// OPTION 2
// function Project(props) {


// // useState variables to display modals
// const [showModal, setShowModal] = useState(false);
// const handleClose = () => setShowModal(false);
// const handleShow = () => setShowModal(true);

//     return (
// <div className='container'>
//     <div className='row'>
//         {projectData.map((data) => {
//             return (
//                 <div className='col-3 d-flex mb-4'>
//                     <Button onClick={handleShow} className="project-card card p-0 border-5 border-dark shadow-lg">
//                         <img className='card-img shadow-lg' src={data.photo} alt={data.name} >
//                         </img>
//                     </Button>


//                 </div>
//             );
//         })}
//                 {projectData.map(({id, name, summary, techSkills, url, gitHub}) => {
//                     return (
//                         <Modal
//                             {...props}
//                             size="lg"
//                             aria-labelledby="contained-modal-title-vcenter"
//                             centered
//                             show={showModal}
//                             onHide={handleClose}
//                             key={id}
//                         >
//                             <Modal.Header closeButton className="border-dark">
//                                 <Modal.Title className="" id="modal-title">
//                                     {name}
//                                 </Modal.Title>
//                             </Modal.Header>

//                             <Modal.Body className="container">
//                                 <p>
//                                     {summary}
//                                 </p>

//                                 <br />

//                                 <p>
//                                     {techSkills}
//                                 </p>
//                             </Modal.Body>
//                             <Modal.Footer className="modal-bg border-dark">
//                                 <Button id="modal-button" className="" target='_blank' rel='noreferrer' href={url}>View live app here!</Button>
//                                 <Button id="modal-button" className="" target='_blank' rel='noreferrer' href={gitHub}>
//                                     <span className='bi bi-github work-icon'></span>
//                                 </Button>
//                             </Modal.Footer>
//                         </Modal>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// OPTION 3

// const Project = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [activeObject, setActiveObject] = useState(null);

//     function getClass(index) {
//         return index === activeObject?.id ? "active" : 'inactive';
//     }

//     const Modal = ({ object: { name, summary, techSkills, url, gitHub } }) => (

//         <div className="active container border mb-4">
//             <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                     <div className="modal-header border-dark">
//                         <div className="modal-title fs-5">
//                             {name}
//                         </div>
//                     </div>
//                     <div className="container modal-body">
//                         <p>
//                             Project Overview: <br /> {summary}
//                         </p>

//                         <br />

//                         <p>
//                             Technologies Used: <br /> {techSkills}
//                         </p>
//                     </div>
//                     <div className="modal-footer">
//                         <button id="modal-button" className="" target='_blank' rel='noreferrer' href={url}>View live app!</button>
//                         <button id="modal-button" className="" target='_blank' rel='noreferrer' href={gitHub}>
//                             <span className='bi bi-github work-icon'></span>
//                         </button>
//                         <button onClick={() => setShowModal(false)}>Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <>
//             <div className='container'>
//                 <div className='row'>
//                     {projectData.map(({ id, photo, name }) => (
//                         <div className='col-3 d-flex mb-4' key={id}>
//                             <button
//                                 onClick={() => {
//                                     setActiveObject({ id, photo, name });
//                                     setShowModal(true);
//                                 }}
//                                 className={getClass(id)}
//                             // className="project-card card p-0 border-none border-dark shadow-lg rounded-3"
//                             >
//                                 <img className='card-img' src={photo} alt={name}>
//                                 </img>
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {showModal ? <Modal object={activeObject} /> : null}
//         </>
//     );
// };

export default DisplayProject;