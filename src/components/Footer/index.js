import React from 'react';
// import instagram from '../../assets/icons/instagram.png';
// import linkedIn from '../../assets/icons/linkedIn.png';
// import gitHub from '../../assets/icons/GitHub_Logo_White.png';

function Footer() {
    return (
        <div id='footer'>
            <div className='text-center navbar d-flex justify-content-center align-items-center py-3'>
                <li className='px-3'>
                    <a href='https://github.com/maggiejoe' rel="noreferrer" target="_blank">
                        gitHub
                    </a>
                </li>
                <li className='px-3'>
                    <a href='https://www.linkedin.com/in/margaret-joseph' rel="noreferrer" target="_blank">
                        linkedIn
                    </a>
                </li>
                <li className='px-3'>
                    <a href='https://www.instagram.com/maggie.joe94/' rel="noreferrer" target="_blank">
                        Instagram
                    </a>
                </li>
            </div>
        </div>
    );
}

export default Footer;