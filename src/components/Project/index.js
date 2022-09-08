// import projects into portfolio
import React, { useState } from 'react';

// component import
import ProjectModals from '../ProjectModals';


// project images
import project1 from '../../assets/images/first-portfolio-500x500.png';
import project2 from '../../assets/images/code-quiz-500x500.png';
import project3 from '../../assets/images/trip-it-500x500.png';
import project4 from '../../assets/images/pass-generator-500x500.png';
import project5 from '../../assets/images/work-scheduler-500x500.png';
import project6 from '../../assets/images/plant-caretaker-500x500.png';
import project7 from '../../assets/images/eye-spy-500x500.png';


function Project() {

    const projects = [
        {
            name: 'First Portfolio',
            photo: project1
        },
        {
            name: 'Code Quiz',
            url: 'https://maggiejoe.github.io/code-quiz/',
            photo: project2
        },
        {
            name: 'Trip It',
            url: 'https://p1group5.github.io/trip-it/',
            photo: project3
        },
        {
            name: 'Password Generator',
            photo: project4
        },
        {
            name: 'Workday Scheduler',
            photo: project5
        },
        {
            name: 'The Lazy Plant Caretaker',
            photo: project6
        },
        {
            name: 'Eye Spy',
            photo: project7
        }
    ];

    // useState variables for modals
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='container'>
            <div className='row'>
                {projects.map((project) => {
                    return (
                        <div className='col-3 d-flex mb-4'>
                            <div className="project-card card border-none border-dark shadow-lg rounded-3">
                                <img className='card-img shadow-lg' src={project.photo} alt={project.name} onClick={() => setModalShow(true)}>
                                </img>
                            </div>
                        </div>
                    );
                })}
                {/* MODAL */}
                <ProjectModals
                    isOpen={modalShow}
                    onRequestClose={() => setModalShow(false)}
                >
                </ProjectModals>
            </div>
        </div>
    );
}

export default Project;