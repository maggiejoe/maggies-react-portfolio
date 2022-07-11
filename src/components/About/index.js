import React from 'react';
import selfPortrait from '../../assets/images/self-portrait.png';

function About() {
    return (
        <section className='py-5 text-center'>
            <h1 id='text-color' className='mb-5'>Hey, I'm Maggie!</h1>
            <img src={selfPortrait} id='img-border' className='mb-4' style={{ width: "25%" }} alt='Self portrait' />
            <div>
                <p id='text-color' className='pb-5'>
                    Hi! Thank you for visiting my portfolio! I'm a full stack web developer that recently completed the Full Stack Coding Program with the University of Toronto.
                    Over the past six months I've gotten a crash course on all things coding. I've gained skills with front-end knowledge with HTML, CSS, React in addition to
                    back-end knowledge with JavaScript, MySQL, MongoDB, node.js and much more!
                    <br />
                    <br />
                    I'm looking forward to taking all the knowledge I've learned and apply it to exciting web designs with a passionate team of developers!
                    With my several years of experience in customer service and management I think I have all the qualities to fit your team!
                    Please visit the contact me sections so we can get in touch! I look forward to meeting you!
                </p>
            </div>
        </section>
    );
}

export default About;