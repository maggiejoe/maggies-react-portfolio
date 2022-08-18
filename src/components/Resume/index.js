import React from 'react';

function Resume() {
    return (
        <div id='text-color' className='text-center p-5'>
            <div className=''>
                <h2 className='titles text-color pb-3 mb-5 border-bottom border-dark'>Skills</h2>
            </div>
            <div className='d-flex flex-wrap justify-content-evenly'>
            <a className='resume col-12 pb-3 mb-5 text-decoration-none all-text' href='https://drive.google.com/file/d/1a3TgD03Yk_S0W_UH1l2n1N0b3aALnymG/view?usp=sharing' rel="noreferrer" target="_blank">
                    Click here to view my Resume
                </a>
                <div className='p-3 px-3 resume-bg shadow-lg border border-2 border-dark rounded-3'>
                    <h5 id='resume-title' className='titles resume-title mb-3 pb-3 border-bottom border-dark'>Back-End Proficiencies</h5>
                    <ul className='p-0 sub-text'>
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
                    <h5 id='resume-title' className='titles resume-title mb-3 pb-3 border-bottom border-dark'>Front-End Proficiencies</h5>
                    <ul className='p-0 sub-text'>
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
                    <h5 id='resume-title' className='titles resume-title mb-3 pb-3 border-bottom border-dark'>Development Tool Proficiencies</h5>
                    <ul className='p-0 sub-text'>
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