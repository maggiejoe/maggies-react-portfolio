// import projects into portfolio
import React, { useState } from 'react';

// react bootstrap imports
// import Modal from 'react-bootstrap/Modal';

// project images
import project1 from '../../assets/images/first-portfolio-500x500.png';
import project2 from '../../assets/images/code-quiz-500x500.png';
import project3 from '../../assets/images/trip-it-500x500.png';
import project4 from '../../assets/images/pass-generator-500x500.png';
import project5 from '../../assets/images/work-scheduler-500x500.png';
import project6 from '../../assets/images/plant-caretaker-500x500.png';
import project7 from '../../assets/images/eye-spy-500x500.png';

const projectData = [
    {
        id: 1,
        name: 'First Portfolio',
        photo: project1,
        url: 'https://maggiejoe.github.io/Portfolio/',
        gitHub: 'https://github.com/maggiejoe/Portfolio.git',
        summary: 'This was one of my first assignments with the University of Toronto where I showcase my HTML and CSS skills to create a basic user friendly Portfolio',
        techSkills: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Code Quiz',
        url: 'https://maggiejoe.github.io/code-quiz/',
        photo: project2,
        gitHub: 'https://github.com/maggiejoe/code-quiz.git',
        summary: 'This was an assignment with the University of Toronto where I created a coding quiz that used several new technologies for a fun user experience!',
        techSkills: 'HTML, CSS, JavaScript, localStorage'
    },
    {
        id: 3,
        name: 'Trip It',
        url: 'https://p1group5.github.io/trip-it/',
        photo: project3,
        gitHub: 'https://github.com/P1Group5/trip-it.git',
        summary: 'Trip It makes your vacation booking needs easier! We put everything you need to plan a great vacation all in one spot!',
        techSkills: 'HTML, CSS, Bulma, JavaScript, API Integration'
    },
    {
        id: 4,
        name: 'Password Generator',
        url: 'https://maggiejoe.github.io/password-generator/',
        photo: project4,
        gitHub: 'https://github.com/maggiejoe/password-generator.git',
        summary: 'Are you looking to create secure passwords that are nearly impossible to hack? This password generator is the perfect application for that! Whatever criteria you need to meet, this app will give you the perfect secure password!',
        techSkills: 'HTML, CSS, JavaScript'
    },
    {
        id: 5,
        name: 'Workday Scheduler',
        url: 'https://maggiejoe.github.io/work-day-scheduler/',
        photo: project5,
        gitHub: 'https://github.com/maggiejoe/work-day-scheduler.git',
        summary: "If you need help organizing your busy workday, this scheduler is made for you! It will help keep you on track with all of your daily tasks by the hour so you don't have too!",
        techSkills: 'HTML, CSS, JavaScript, jQuery, Moment.js'
    },
    {
        id: 6,
        name: 'The Lazy Plant Caretaker',
        url: 'https://lazy-plant-caretaker.herokuapp.com/',
        photo: project6,
        gitHub: 'https://github.com/project02group12/lazy-plant-caretaker.git',
        summary: 'Need help finding the right house plants for your home or workspace? The Lazy Plant Caretaker is your ultimate guide to becoming a green thumb!',
        techSkills: "HTML, CSS, BootStrap, JavaScript, Handlebars.js, RESTful Api's, mySQL, Node.js"
    },
    {
        id: 7,
        name: 'Eye Spy',
        url: 'https://eye-spy-2022.herokuapp.com/',
        photo: project7,
        gitHub: 'https://github.com/CaptainNate/eye-spy.git',
        summary: "Eye Spy helps users find the perfect hidden gems for their outdoor activites. No more going on adventures and being overwhelmed with the crowds. Eye Spy ensures you have the perfect tranquil outdoor experience you're looking for!",
        techSkills: 'HTML, CSS, BootStrap, JavaScript, React, Mongoose, MongoDB, graphQL, Node.js, Express, JWT Authentication'
    }
];

const Project = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeObject, setActiveObject] = useState(null);

    function getClass(index) {
        return index === activeObject?.id ? "active" : 'inactive';
    }

    const Modal = ({ object: { name, url, gitHub, summary, techSkills } }) => (

        <div className="active">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-dark">
                        <div className="modal-title">
                            {name}
                        </div>
                    </div>

                    <div className="container modal-body">
                        <p>
                            {summary}
                        </p>

                        <br />

                        <p>
                            {techSkills}
                        </p>
                    </div>
                    <div className="modal-footer modal-bg border-dark">
                        <button id="modal-button" className="" target='_blank' rel='noreferrer' href={url}>View live app here!</button>
                        <button id="modal-button" className="" target='_blank' rel='noreferrer' href={gitHub}>
                            <span className='bi bi-github work-icon'></span>
                        </button>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {projectData.map(({ id, photo, name }) => (
                        <div className='col-3 d-flex mb-4' key={id}>
                            <button
                                onClick={() => {
                                    setActiveObject({ id, photo, name });
                                    setShowModal(true);
                                }}
                                className={getClass(id)}
                                // className="project-card card p-0 border-none border-dark shadow-lg rounded-3"
                            >
                                <img className='card-img shadow-lg' src={photo} alt={name}>
                                </img>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {showModal ? <Modal object={activeObject} /> : null}
        </>
    );
};

// function Project(props) {


//     // useState variables to display modals
//     const [showModal, setShowModal] = useState(false);
//     const handleClose = () => setShowModal(false);
//     const handleShow = () => setShowModal(true);


//     return (
// <div className='container'>
//     <div className='row'>
//         {projectData.map((data) => {
//             return (
// <div className='col-3 d-flex mb-4'>
//     <Button onClick={handleShow} className="project-card card p-0 border-none border-dark shadow-lg rounded-3">
//         <img className='card-img shadow-lg' src={data.photo} alt={data.name} >
//         </img>
//     </Button>

// <Modal
//     {...props}
//     size="lg"
//     aria-labelledby="contained-modal-title-vcenter"
//     centered
//     show={showModal}
//     onHide={handleClose}
//     key={data.id}
// >
//     <Modal.Header closeButton className="border-dark">
//         <Modal.Title className="" id="modal-title">
//             {data.name}
//         </Modal.Title>
//     </Modal.Header>

//     <Modal.Body className="container">
//         <p>
//             {data.summary}
//         </p>

//         <br />

//         <p>
//             {data.techSkills}
//         </p>
//     </Modal.Body>
//     <Modal.Footer className="modal-bg border-dark">
//         <Button id="modal-button" className="" target='_blank' rel='noreferrer' href={data.url}>View live app here!</Button>
//         <Button id="modal-button" className="" target='_blank' rel='noreferrer' href={data.gitHub}>
//             <span className='bi bi-github work-icon'></span>
//         </Button>
//     </Modal.Footer>
// </Modal>

//                         </div>
//                     );
//                 })}
//             </div>

//         </div>
//     );
// }

export default Project;