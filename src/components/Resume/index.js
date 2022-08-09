import React from 'react';

function Resume() {
    return (
        <div id='text-color' className='text-center p-5'>
            <div className='pb-5'>
                <h2 className='pb-3 mb-5 border-bottom border-dark'>Resume</h2>
                <a id='resume' href='https://drive.google.com/file/d/1NNAUDpiuuY8DYmOMFoztzKa6CqK7dLiP/view?usp=sharing' rel="noreferrer" target="_blank">
                    Click here to view my Resume
                </a>
            </div>
            <div className='d-flex flex-wrap justify-content-evenly'>
                <div className='p-3 px-3 resume-bg shadow-lg border border-2 border-dark rounded-3'>
                    <h5 id='resume-title' className='resume-title mb-3 pb-3 border-bottom border-dark'>Back-End Proficiencies</h5>
                    <ul className='p-0'>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Local Storage</li>
                        <li>IndexedDB</li>
                        <li>Object Oriented Programming (OOP)</li>
                        <li>Object Relational Mapping (ORM)</li>
                        <li>Model-View-Control (MVC)</li>
                        <li>Progressive Web Applications (PWA)</li>
                        <li>MERN</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className='p-3 px-3  resume-bg shadow-lg border border-2 border-dark rounded-3'>
                    <h5 id='resume-title' className='resume-title mb-3 pb-3 border-bottom border-dark'>Front-End Proficiencies</h5>
                    <ul className='p-0'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Handlebars.js</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                    </ul>
                </div>
                <div className='p-3 px-3 resume-bg shadow-lg border border-2 border-dark rounded-3'>
                    <h5 id='resume-title' className='resume-title mb-3 pb-3 border-bottom border-dark'>Development Tool Proficiencies</h5>
                    <ul className='p-0'>
                        <li>GitBash</li>
                        <li>npm/npx</li>
                        <li>Heroku</li>
                        <li>Insomnia</li>
                        <li>Jest</li>
                        <li>Webpack</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume