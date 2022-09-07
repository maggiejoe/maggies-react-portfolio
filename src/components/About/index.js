import React from 'react';

function About() {
    return (
        <section className=''>
            <div className='container d-flex flex-wrap justify-content-start align-items-center'  style={{ height: "100vh" }}>
                <div className='row'>
                    <div className='col-12 p-5'>
                        <h1 className='intro-text fs-4 pb-4'>Hey! I'm</h1>
                        <h1 className='name-text pb-4'>Maggie Joseph</h1>
                        <p className='all-text intro-text'>
                        <span className='intro-text'>A Full Stack Web Developer with a passion for Front End Development</span>
                        < br/>
                        < br/>
                        I recently obtained a certificate in coding with the University of Toronto where I was immersed in several different relevant coding languages. The most important and exciting being the MERN stack.
                        < br/>
                        < br/>
                        I have well rounded knowledge of the MERN stack in addition to several other development methods. While front end development is where I truly shine, I do have a wide range of knowledge on back end development. From object oriented programing to progressive web applications, I can take all the skills I've learned and create engaging and useful web applications. 
                        < br/>
                        < br/>
                        I am self motivated, a problem solver and have a high attention to detail. <span className='name-text-2'>Let's Collaborate !</span>
                        < br/>
                        < br/>
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;