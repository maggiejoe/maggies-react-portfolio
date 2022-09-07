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
            gitHub: 'https://github.com/maggiejoe/Portfolio.git',
            // summary: 'This was one of my first assignments with the University of Toronto where I showcase my HTML and CSS skills to create a basic user friendly Portfolio',
            // techSkills: 'HTML, CSS'
        },
        {
            name: 'Code Quiz',
            photo: project2,
            url: 'https://maggiejoe.github.io/code-quiz/',
            gitHub: 'https://github.com/maggiejoe/code-quiz.git',
            // summary: 'This was an assignment with the University of Toronto where I created a coding quiz that used several new technologies for a fun user experience!',
            // techSkills: 'HTML, CSS, JavaScript, localStorage'
        },
        {
            name: 'Trip It',
            photo: project3,
            url: 'https://p1group5.github.io/trip-it/',
            gitHub: 'https://github.com/P1Group5/trip-it.git',
            // summary: 'Trip It makes your vacation booking needs easier! We put everything you need to plan a great vacation all in one spot!',
            // techSkills: 'HTML, CSS, Bulma, JavaScript, API Integration'
        },
        {
            name: 'Password Generator',
            photo: project4,
            url: 'https://maggiejoe.github.io/password-generator/',
            gitHub: 'https://github.com/maggiejoe/password-generator.git',
            // summary: 'Are you looking to create secure passwords that are nearly impossible to hack? This password generator is the perfect application for that! Whatever criteria you need to meet, this app will give you the perfect secure password!',
            // techSkills: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Workday Scheduler',
            photo: project5,
            url: 'https://maggiejoe.github.io/work-day-scheduler/',
            gitHub: 'https://github.com/maggiejoe/work-day-scheduler.git',
            // summary: "If you need help organizing your busy workday, this scheduler is made for you! It will help keep you on track with all of your daily tasks by the hour so you don't have too!",
            // techSkills: 'HTML, CSS, JavaScript, jQuery, Moment.js'
        },
        {
            name: 'The Lazy Plant Caretaker',
            photo: project6,
            url: 'https://lazy-plant-caretaker.herokuapp.com/',
            gitHub: 'https://github.com/project02group12/lazy-plant-caretaker.git',
            // summary: 'Need help finding the right house plants for your home or workspace? The Lazy Plant Caretaker is your ultimate guide to becoming a green thumb!',
            // techSkills: "HTML, CSS, BootStrap, JavaScript, Handlebars.js, RESTful Api's, mySQL, Node.js"
        },
        {
            name: 'Eye Spy',
            photo: project7,
            url: 'https://eye-spy-2022.herokuapp.com/',
            gitHub: 'https://github.com/CaptainNate/eye-spy.git',
            // summary: "Eye Spy helps users find the perfect hidden gems for their outdoor activites. No more going on adventures and being overwhelmed with the crowds. Eye Spy ensures you have the perfect tranquil outdoor experience you're looking for!",
            // techSkills: 'HTML, CSS, BootStrap, JavaScript, React, Mongoose, MongoDB, graphQL, Node.js, Express, JWT Authentication'
        }

    ];

    return (
        <div className='container'>
            <div className='row'>
                {projects.map((project) => {
                    return (
                        <div className='col-3 d-flex mb-4'>
                            <a target='_blank' rel='noreferrer' href={project.url}>
                                <div className="project-card card border-dark border-2 shadow-lg rounded-3">
                                    <img className='card-img shadow-lg' src={project.photo} alt={project.name}>
                                    </img>
                                    <div className='card-img-overlay d-flex justify-content-start align-items-end px-1 py-0'>
                                        {/* <h1 className='project-title'>{project.name}</h1> */}
                                        <a target='_blank' rel='noreferrer' href={project.gitHub}>
                                            <span className='bi bi-github work-icon'></span>
                                        </a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Project;