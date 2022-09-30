// import projects into portfolio
import React, { useState } from 'react';

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

// project images
import project1 from '../../assets/images/first-portfolio-500x500.png';
import project2 from '../../assets/images/code-quiz-500x500.png';
import project3 from '../../assets/images/trip-it-500x500.png';
import project4 from '../../assets/images/pass-generator-500x500.png';
import project5 from '../../assets/images/work-scheduler-500x500.png';
import project6 from '../../assets/images/plant-caretaker-500x500.png';
import project7 from '../../assets/images/eye-spy-500x500.png';

function Projects() {

    // Project 1 Hover
    const [isHoveringP1, setIsHoveringP1] = useState(false);

    const handleMouseOverP1 = () => {
        setIsHoveringP1(true);
    };

    const handleMouseOutP1 = () => {
        setIsHoveringP1(false);
    };

    // Project 2 Hover
    const [isHoveringP2, setIsHoveringP2] = useState(false);

    const handleMouseOverP2 = () => {
        setIsHoveringP2(true);
    };

    const handleMouseOutP2 = () => {
        setIsHoveringP2(false);
    };

    // Project 3 Hover
    const [isHoveringP3, setIsHoveringP3] = useState(false);

    const handleMouseOverP3 = () => {
        setIsHoveringP3(true);
    };

    const handleMouseOutP3 = () => {
        setIsHoveringP3(false);
    };

    // Project 4 Hover
    const [isHoveringP4, setIsHoveringP4] = useState(false);

    const handleMouseOverP4 = () => {
        setIsHoveringP4(true);
    };

    const handleMouseOutP4 = () => {
        setIsHoveringP4(false);
    };

    // Project 5 Hover
    const [isHoveringP5, setIsHoveringP5] = useState(false);

    const handleMouseOverP5 = () => {
        setIsHoveringP5(true);
    };

    const handleMouseOutP5 = () => {
        setIsHoveringP5(false);
    };

    // Project 6 Hover
    const [isHoveringP6, setIsHoveringP6] = useState(false);

    const handleMouseOverP6 = () => {
        setIsHoveringP6(true);
    };

    const handleMouseOutP6 = () => {
        setIsHoveringP6(false);
    };

    // Project 7 Hover
    const [isHoveringP7, setIsHoveringP7] = useState(false);

    const handleMouseOverP7 = () => {
        setIsHoveringP7(true);
    };

    const handleMouseOutP7 = () => {
        setIsHoveringP7(false);
    };

    return (
        <Container>
            <Row>
                {/* Project 1 */}
                <Col className='col-3 mb-4'>
                    <a target='_blank' rel='noreferrer' href='https://maggiejoe.github.io/Portfolio/' onMouseOver={handleMouseOverP1} onMouseOut={handleMouseOutP1}>
                        <div className="card">
                            <img className='rounded' src={project1} alt='Project 1'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start text-center'>
                                {isHoveringP1 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='project-title fs-3 fw-bolder border-bottom border-dark p-2'>Basic Portfolio</h1>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='project-text fs-6 fst-italic'>This was one of the first applications built with the University of Toronto. I challenged my abilities with the technologies below to show you a little bit of who I am and what I've done.</p>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='project-text fs-6 fst-italic'>HTML, CSS</p>
                                        </div>
                                        <a target='_blank' rel='noreferrer' href='https://github.com/maggiejoe/Portfolio.git'>
                                            <span className='bi bi-github work-icon'></span>
                                        </a>
                                    </Col>
                                }

                            </div>
                        </div>
                    </a>
                </Col>

                {/* Project 2 */}
                <Col className='col-3 mb-4'>
                    <a target='_blank' rel='noreferrer' href='https://maggiejoe.github.io/code-quiz/' onMouseOver={handleMouseOverP2} onMouseOut={handleMouseOutP2}>
                        <div className="card">
                            <img className='rounded' src={project2} alt='Project 2'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start'>
                                {isHoveringP2 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='project-title fs-3 fw-bolder border-bottom border-dark p-2'>Code Quiz</h1>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='project-text fs-6 fst-italic'>This was a quiz I built to test my ability to combine all of the technologies listed below. It is a timed interactive multiple choice quiz, testing your coding knowledge. You also have the ability to save your high scores and keep track of them in the high score section!</p>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='project-text fs-6 fst-italic'>HTML, CSS, JavaScript, LocalStorage</p>
                                        </div>
                                        <a target='_blank' rel='noreferrer' href='https://github.com/maggiejoe/code-quiz.git'>
                                            <span className='bi bi-github work-icon'></span>
                                        </a>
                                    </Col>
                                }

                            </div>
                        </div>
                    </a>
                </Col>
                {/* Project 3 */}
                <Col className='col-3 mb-4'>
                    <a target='_blank' rel='noreferrer' href='https://p1group5.github.io/trip-it/' onMouseOver={handleMouseOverP3} onMouseOut={handleMouseOutP3}>
                        <div className="card">
                            <img className='rounded' src={project3} alt='Project 3'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start'>
                                {isHoveringP3 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='project-title fs-3 fw-bolder border-bottom border-dark p-2'>Trip It</h1>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='project-text fs-6 fst-italic'>Trip is was the first group project I participated in with the University of Toronto bootcamp. I worked alongside three other developers to build an interactive frontend application. It contains three server-side API's and a polished UI with responsiveness for all devices.</p>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='project-text fs-6 fst-italic'>HTML, CSS, Bulma, JavaScript, API Integration</p>
                                        </div>
                                        <a target='_blank' rel='noreferrer' href='https://github.com/P1Group5/trip-it.git'>
                                            <span className='bi bi-github work-icon'></span>
                                        </a>
                                    </Col>
                                }

                            </div>
                        </div>
                    </a>
                </Col>
                {/* Project 4 */}
                <Col className='col-3 mb-4'>
                    <a target='_blank' rel='noreferrer' href='https://maggiejoe.github.io/password-generator/' onMouseOver={handleMouseOverP4} onMouseOut={handleMouseOutP4}>
                        <div className="card">
                            <img className='rounded' src={project4} alt='Project 4'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start'>
                                {isHoveringP4 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='project-title fs-3 fw-bolder border-bottom border-dark p-2'>Password Generator</h1>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='project-text fs-6 fst-italic'>This application makes creating a secure and custom password easy for any user. Follow the password criteria prompts and receive a strong password for greater security!</p>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='project-text fs-6 fst-italic'>HTML, CSS, JavaScript</p>
                                        </div>
                                        <a target='_blank' rel='noreferrer' href='https://github.com/maggiejoe/password-generator.git'>
                                            <span className='bi bi-github work-icon'></span>
                                        </a>
                                    </Col>
                                }

                            </div>
                        </div>
                    </a>
                </Col>
                {/* Project 5 */}
                <Col className='col-3 mb-4'>
                    <a target='_blank' rel='noreferrer' href='https://maggiejoe.github.io/work-day-scheduler/' onMouseOver={handleMouseOverP5} onMouseOut={handleMouseOutP5}>
                        <div className="card">
                            <img className='rounded' src={project5} alt='Project 5'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start'>
                                {isHoveringP5 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='project-title fs-3 fw-bolder border-bottom border-dark p-2'>Workday Scheduler</h1>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='project-text fs-6 fst-italic'>Workday Scheduler is an application that allows the user to save events for each hour of the day. It uses several different technologies below to dynamically change the colors of each hour of the day to help keep the user organized and onto of their work schedule.</p>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Technologies Used</h2>
                                        <p className='project-text fs-6 fst-italic'>HTML, CSS, JavaScript, jQuery, Moment.js, LocalStorage</p>
                                        </div>
                                        <a target='_blank' rel='noreferrer' href='https://github.com/maggiejoe/work-day-scheduler.git'>
                                            <span className='bi bi-github work-icon'></span>
                                        </a>
                                    </Col>
                                }

                            </div>
                        </div>
                    </a>
                </Col>
                {/* Project 6 */}
                <Col className='col-3 mb-4'>
                    <a target='_blank' rel='noreferrer' href='https://lazy-plant-caretaker.herokuapp.com/' onMouseOver={handleMouseOverP6} onMouseOut={handleMouseOutP6}>
                        <div className="card">
                            <img className='rounded' src={project6} alt='Project 6'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start'>
                                {isHoveringP6 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='project-title fs-3 fw-bolder border-bottom border-dark p-2'>The Lazy Plant Caretaker</h1>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='project-text fs-6 fst-italic'>The Lazy Plant Caretaker was my second group project with the University of Toronto. This is a full stack application built with the technologies below to display everything I had learned up until that point. The main focus of this application is to help users find the perfect houseplants for their home or workspace based off of user prompts. This application takes the guess work and stress of live plants and makes it easy for you to ensure they thrive in your home!</p>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='project-text fs-6 fst-italic'>HTML, CSS, JavaScript, BootStrap, Node.js, Express.js, mySQL, Handlebars</p>
                                        </div>
                                        <a target='_blank' rel='noreferrer' href='https://github.com/project02group12/lazy-plant-caretaker.git'>
                                            <span className='bi bi-github work-icon'></span>
                                        </a>
                                    </Col>
                                }

                            </div>
                        </div>
                    </a>
                </Col>
                {/* Project 7 */}
                <Col className='col-3 mb-4'>
                    <a target='_blank' rel='noreferrer' href='https://eye-spy-2022.herokuapp.com/' onMouseOver={handleMouseOverP7} onMouseOut={handleMouseOutP7}>
                        <div className="card">
                            <img className='rounded' src={project7} alt='Project 7'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start'>
                                {isHoveringP7 &&
                                    <Col className='hover-text text-center align-items-center p-0 m-0'>
                                        <div>
                                            <h1 className='project-title fs-3 fw-bolder border-bottom border-dark p-2'>Eye Spy</h1>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='project-text fs-6 fst-italic'>Eye Spy was the last group project with the University of Toronto. It uses all the technologies below including the MERN Stack and challenged the development skills of every team member. The idea behind Eye Spy is to help users who love the outdoors find places to visit without worrying about overcrowding or over populated destinations. It uses a vote system that is user prompted to let other users know if this location is a true hidden gem or an overcrowded location.</p>
                                        </div>
                                        <div>
                                            <h2 className='sub-header fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='project-text fs-6 fst-italic'>HTML, CSS, React, JSX, JavaScript, Bootstrap, Node.js, Express.js, GraphQL, Mongoose, MongoDB</p>
                                        </div>
                                        <div>
                                            <a className='' target='_blank' rel='noreferrer' href='https://github.com/CaptainNate/eye-spy.git'>
                                                <span className='bi bi-github work-icon'></span>
                                            </a>
                                        </div>
                                    </Col>
                                }
                            </div>
                        </div>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;