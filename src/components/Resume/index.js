import React from 'react';

function Resume() {
    return (
        <div id='text-color' className='text-center p-5'>
            <div className='pb-5'>
                <h2 className='pb-2'>Resume</h2>
                <a id='resume' href='https://drive.google.com/file/d/1NNAUDpiuuY8DYmOMFoztzKa6CqK7dLiP/view?usp=sharing' rel="noreferrer" target="_blank">
                    Click here to view my Resume
                </a>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                <div className='pb-5 px-4'>
                    <h5 id='resume-title'>Front-End Proficiencies</h5>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Handlebars.js</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                    </ul>
                </div>
                <div className='pb-5 px-4'>
                    <h5 id='resume-title'>Back-End Proficiencies</h5>
                    <ul>
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
                <div className='pb-5 px-4'>
                    <h5 id='resume-title'>Development Tool Proficiencies</h5>
                    <ul>
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