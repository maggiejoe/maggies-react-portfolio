import React from 'react';
// import selfPortrait from '../../assets/images/self-portrait.png';

function About() {
    return (
        <section className='container'>
            <div className='d-flex align-items-center row'>
                <div className='col-3'>
                    <div className=''>
                        <h1 id='text-color' className='intro-text fs-4'>Hey! I'm</h1>
                        <h1 id='text-color' className='name-text'>Maggie</h1>
                    </div>
                </div>
                {/* <img src={selfPortrait} id='img-border' className='mb-4' style={{ width: "25%" }} alt='Self portrait' /> */}
                <div className='col-9'>
                    <p id='text-color' className=' intro-text'>
                        Hi! Thank you for visiting my portfolio! I'm a full stack web developer that recently completed the Full Stack Coding Program with the University of Toronto.
                        Over the past six months I've gotten a crash course on all things coding. I've gained skills with front-end knowledge with HTML, CSS, React in addition to
                        back-end knowledge with JavaScript, MySQL, MongoDB, node.js and much more!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;