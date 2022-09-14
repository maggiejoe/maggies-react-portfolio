import React from 'react';
import Projects from '../Projects';

function Portfolio() {
    return (
        <div className=''>
            <div className=''>
                <h2 className='titles text-color d-flex justify-content-center pb-3 m-5 border-bottom border-dark'>My Work</h2>
                <div className=''>
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;