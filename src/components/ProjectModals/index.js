import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Modals(props) {

    const modalData = [
        {
            name: 'First Portfolio',
            url: 'https://maggiejoe.github.io/Portfolio/',
            gitHub: 'https://github.com/maggiejoe/Portfolio.git',
            summary: 'This was one of my first assignments with the University of Toronto where I showcase my HTML and CSS skills to create a basic user friendly Portfolio',
            techSkills: 'HTML, CSS'
        },
        {
            name: 'Code Quiz',
            url: 'https://maggiejoe.github.io/code-quiz/',
            gitHub: 'https://github.com/maggiejoe/code-quiz.git',
            summary: 'This was an assignment with the University of Toronto where I created a coding quiz that used several new technologies for a fun user experience!',
            techSkills: 'HTML, CSS, JavaScript, localStorage'
        },
        {
            name: 'Trip It',
            url: 'https://p1group5.github.io/trip-it/',
            gitHub: 'https://github.com/P1Group5/trip-it.git',
            summary: 'Trip It makes your vacation booking needs easier! We put everything you need to plan a great vacation all in one spot!',
            techSkills: 'HTML, CSS, Bulma, JavaScript, API Integration'
        },
        {
            name: 'Password Generator',
            url: 'https://maggiejoe.github.io/password-generator/',
            gitHub: 'https://github.com/maggiejoe/password-generator.git',
            summary: 'Are you looking to create secure passwords that are nearly impossible to hack? This password generator is the perfect application for that! Whatever criteria you need to meet, this app will give you the perfect secure password!',
            techSkills: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Workday Scheduler',
            url: 'https://maggiejoe.github.io/work-day-scheduler/',
            gitHub: 'https://github.com/maggiejoe/work-day-scheduler.git',
            summary: "If you need help organizing your busy workday, this scheduler is made for you! It will help keep you on track with all of your daily tasks by the hour so you don't have too!",
            techSkills: 'HTML, CSS, JavaScript, jQuery, Moment.js'
        },
        {
            name: 'The Lazy Plant Caretaker',
            url: 'https://lazy-plant-caretaker.herokuapp.com/',
            gitHub: 'https://github.com/project02group12/lazy-plant-caretaker.git',
            summary: 'Need help finding the right house plants for your home or workspace? The Lazy Plant Caretaker is your ultimate guide to becoming a green thumb!',
            techSkills: "HTML, CSS, BootStrap, JavaScript, Handlebars.js, RESTful Api's, mySQL, Node.js"
        },
        {
            name: 'Eye Spy',
            url: 'https://eye-spy-2022.herokuapp.com/',
            gitHub: 'https://github.com/CaptainNate/eye-spy.git',
            summary: "Eye Spy helps users find the perfect hidden gems for their outdoor activites. No more going on adventures and being overwhelmed with the crowds. Eye Spy ensures you have the perfect tranquil outdoor experience you're looking for!",
            techSkills: 'HTML, CSS, BootStrap, JavaScript, React, Mongoose, MongoDB, graphQL, Node.js, Express, JWT Authentication'
        }
    ];


    return (
        <div>
            {modalData.map((data, index) => {
                return (
                    <Modal
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                       <Modal.Header closeButton className="border-dark">
                            <Modal.Title className="" id="modal-title" key={index}>
                                {data.name}
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="container">
                            <p>
                                {data.summary}
                            </p>

                            <br />

                            <p>
                                {data.techSkills}
                            </p>
                        </Modal.Body>
                        <Modal.Footer className="modal-bg border-dark">
                            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href={data.url}>View live app here!</Button>
                            <Button id="modal-button" className="" target='_blank' rel='noreferrer' href={data.gitHub}>
                                <span className='bi bi-github work-icon'></span>
                            </Button>
                        </Modal.Footer>
                    </Modal>
                );
            })}

        </div>
    )
}

export default Modals;