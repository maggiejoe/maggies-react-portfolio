import React from 'react';
import Project from '../Project';

function Portfolio() {
    return (
        <div id='text-color' className=''>
            <div className=''>
                <h2 className='d-flex justify-content-center pb-3 m-5 border-bottom border-dark'>My Work</h2>
                <div className=''>
                    <Project />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;