// import projects into portfolio
import React from 'react';
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
            photo: project1,
            url: 'https://maggiejoe.github.io/Portfolio/',
            gitHub: 'https://github.com/maggiejoe/Portfolio.git'
        },
        {
            name: 'Code Quiz',
            photo: project2,
            url: 'https://maggiejoe.github.io/code-quiz/',
            gitHub: 'https://github.com/maggiejoe/code-quiz.git'
        },
        {
            name: 'Trip It',
            photo: project3,
            url: 'https://p1group5.github.io/trip-it/',
            gitHub: 'https://github.com/P1Group5/trip-it.git'

        },
        {
            name: 'Code Quiz',
            photo: project4,
            url: 'https://maggiejoe.github.io/password-generator/',
            gitHub: 'https://github.com/maggiejoe/password-generator.git'

        },
        {
            name: 'Password Generator',
            photo: project5,
            url: 'https://maggiejoe.github.io/work-day-scheduler/',
            gitHub: 'https://github.com/maggiejoe/work-day-scheduler.git'


        },
        {
            name: 'The Lazy Plant Caretaker',
            photo: project6,
            url: 'https://lazy-plant-caretaker.herokuapp.com/',
            gitHub: 'https://github.com/project02group12/lazy-plant-caretaker.git'

        },
        {
            name: 'Eye Spy',
            photo: project7,
            url: 'https://eye-spy-2022.herokuapp.com/',
            gitHub: 'https://github.com/CaptainNate/eye-spy.git'

        }

    ];

    return (
        <div id='text-color' className='container'>
            <div className='row'>
                {projects.map((project) => {
                    return (
                        <div className='col-4 d-flex flex-wrap text-center pb-4'>
                            <div className="border border-dark">
                                <div className='p-3'>
                                    <h4 className='pb-3 border-bottom border-dark'>
                                        {project.name}
                                    </h4>
                                    <img className='pb-3 mt-3' src={project.photo} alt={project.name} style={{ width: '50%' }}>
                                    </img>
                                    <div>
                                        <a id='links' href={project.url}>
                                            Deployable Link
                                        </a>
                                        <br />
                                        <a id='links' href={project.gitHub}>
                                            GitHub Repository
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Project;