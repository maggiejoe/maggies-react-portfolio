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
                        <div className="card border-dark border-2 shadow-lg rounded-3">
                            <img className='shadow-lg' src={project1} alt='Project 1'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start text-center'>
                                {isHoveringP1 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='fs-3 fw-bolder'>Basic Portfolio</h1>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='fs-6 fst-italic'>This was one of the first applications built with the University of Toronto. I challenged my abilities with the technologies below to show you a little bit of who I am and what I've done.</p>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='fs-6 fst-italic'>HTML, CSS</p>
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
                        <div className="card border-dark border-2 shadow-lg rounded-3">
                            <img className='shadow-lg' src={project2} alt='Project 2'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start px-1 py-0'>
                                {isHoveringP2 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='fs-3 fw-bolder'>Code Quiz</h1>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='fs-6 fst-italic'>This was a quiz I built to test my ability to combine all of the technologies below.</p>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='fs-6 fst-italic'>HTML, CSS, JavaScript, LocalStorage</p>
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
                        <div className="card border-dark border-2 shadow-lg rounded-3">
                            <img className='shadow-lg' src={project3} alt='Project 3'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start px-1 py-0'>
                                {isHoveringP3 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='fs-3 fw-bolder'>Basic Portfolio</h1>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='fs-6 fst-italic'>Lorem Ipsum</p>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='fs-6 fst-italic'>Lorem Ipsum</p>
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
                        <div className="card border-dark border-2 shadow-lg rounded-3">
                            <img className='shadow-lg' src={project4} alt='Project 4'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start px-1 py-0'>
                                {isHoveringP4 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='fs-3 fw-bolder'>Basic Portfolio</h1>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='fs-6 fst-italic'>Lorem Ipsum</p>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='fs-6 fst-italic'>Lorem Ipsum</p>
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
                        <div className="card border-dark border-2 shadow-lg rounded-3">
                            <img className='shadow-lg' src={project5} alt='Project 5'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start px-1 py-0'>
                                {isHoveringP5 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='fs-3 fw-bolder'>Basic Portfolio</h1>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='fs-6 fst-italic'>Lorem Ipsum</p>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='fs-6 fst-italic'>Lorem Ipsum</p>
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
                        <div className="card border-dark border-2 shadow-lg rounded-3">
                            <img className='shadow-lg' src={project6} alt='Project 6'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start px-1 py-0'>
                                {isHoveringP6 &&
                                    <Col className='hover-text text-center align-items-center'>
                                        <div>
                                            <h1 className='fs-3 fw-bolder'>Basic Portfolio</h1>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='fs-6 fst-italic'>Lorem Ipsum</p>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='fs-6 fst-italic'>Lorem Ipsum</p>
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
                        <div className="card border-dark border-2 shadow-lg rounded-3">
                            <img className='shadow-lg' src={project7} alt='Project 7'>
                            </img>
                            <div className='project-card card-img-overlay d-flex justify-content-start align-items-start px-1 py-0'>
                                {isHoveringP7 &&
                                    <Col className='hover-text text-center align-items-center p-0 m-0'>
                                        <div>
                                            <h1 className='fs-3 fw-bolder'>Basic Portfolio</h1>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Project Overview</h2>
                                            <p className='fs-6 fst-italic'>Lorem Ipsum</p>
                                        </div>
                                        <div>
                                            <h2 className='fs-5 fw-bolder'>Technologies Used</h2>
                                            <p className='fs-6 fst-italic'>Lorem Ipsum</p>
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