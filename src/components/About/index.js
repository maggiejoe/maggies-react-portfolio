import React from 'react';
// import selfPortrait from '../../assets/images/self-portrait.png';

function About() {
    return (
        <section className=''>
            <div className='container d-flex flex-wrap justify-content-start align-items-center'  style={{ height: "100vh" }}>
                <div className='row'>
                    <div className='col-12 p-5'>
                        <h1 id='text-color' className='intro-text fs-4'>Hey! I'm</h1>
                        <h1 id='text-color' className='name-text'>Maggie</h1>
                        <p id='text-color' className='intro-text'>
                        Full-Stack-Web-Developer
                    </p>
                    </div>
                </div>
                {/* <img src={selfPortrait} id='img-border' className='mb-4' style={{ width: "25%" }} alt='Self portrait' /> */}
                {/* <div className='col-6'>

                </div> */}
            </div>
        </section>
    );
}

export default About;