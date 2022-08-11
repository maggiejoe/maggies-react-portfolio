import React from 'react';
import Navigation from '../Naviation';
// import Footer from '../Footer';

function Header(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props

    return (
        <section id='header' className='d-flex justify-content-between' >
            <header className=''>
                <div className='d-flex flex-wrap flex-column justify-content-between' style={{height: '100%'}}>
                    <a className='text-decoration-none' href='/'>
                    <div className=' nav-bg d-flex flex-wrap pt-4 pb-4 align-items-start justify-content-center shadow-lg'>
                        <h1 className='name-text-header'>Maggie</h1>
                        <p className='all-text'>Web Developer</p>
                    </div>
                    </a>
                    <div className='text-center'>
                        <Navigation
                            categories={categories}
                            currentCategory={currentCategory}
                            setCurrentCategory={setCurrentCategory}
                        >
                        </Navigation>
                    </div>
                    <div className='container d-flex flex-wrap'>
                        <ul className=' row'>
                            <li className='col-6'>
                                <a href="https://github.com/maggiejoe">
                                    <span className='bi bi-github header-icon'></span>
                                </a>
                            </li>
                            <li className='col-6'>
                                <a href="https://www.linkedin.com/in/margaret-joseph-5b673716a/">
                                    <span className='bi bi-linkedin header-icon'></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Header;