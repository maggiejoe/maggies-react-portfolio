// import projects into portfolio
import React from 'react';
import project1 from '../../assets/images/lazy-plant-caretaker.png';
import project2 from '../../assets/images/trip-it.png';
import project3 from '../../assets/images/workday-scheduler.png';
import project4 from '../../assets/images/code-quiz.png';
import project5 from '../../assets/images/password-generator.png';
import project6 from '../../assets/images/first-portfolio.png';


function Project() {

    const projects = [
        {
            name: 'The Lazy Plant Caretaker',
            photo: project1,
            url: 'https://project02group12.github.io/lazy-plant-caretaker/',
            gitHub: 'https://github.com/project02group12/lazy-plant-caretaker.git'

        },
        {
            name: 'Trip It',
            photo: project2,
            url: 'https://p1group5.github.io/trip-it/',
            gitHub: 'https://github.com/P1Group5/trip-it.git'

        },
        {
            name: 'Workday Scheduler',
            photo: project3,
            url: 'https://maggiejoe.github.io/work-day-scheduler/',
            gitHub: 'https://github.com/maggiejoe/work-day-scheduler.git'

        },
        {
            name: 'Code Quiz',
            photo: project4,
            url: 'https://maggiejoe.github.io/code-quiz/',
            gitHub: 'https://github.com/maggiejoe/code-quiz.git'

        },
        {
            name: 'Password Generator',
            photo: project5,
            url: 'https://maggiejoe.github.io/password-generator/',
            gitHub: 'https://github.com/maggiejoe/password-generator.git'

        },
        {
            name: 'First Portfolio',
            photo: project6,
            url: 'https://maggiejoe.github.io/Portfolio/',
            gitHub: 'https://github.com/maggiejoe/Portfolio.git'

        }

    ];

    return (
        <div>
            <div>
                {projects.map((project) => {
                    return (
                        <div>
                            <div>
                                <img src={project.photo} alt={project.name}>
                                </img>
                                <div>
                                    <h3>
                                        {project.name}
                                    </h3>
                                    <a href={project.url}>
                                        Deployable Link
                                    </a>
                                    <br />
                                    <a href={project.gitHub}>
                                        GitHub Repository
                                    </a>
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