import React from 'react';
import Navigation from '../Naviation';

function Header(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props

    return (
        <section id='header'>
            <header>
                <div className=''>
                    <div className='py-4'>
                        <h3 id='headerText' className='fw-bolder fs-1 text-center'>Maggie Joseph</h3>
                    </div>
                    <div className='text-center'>
                        <Navigation
                            categories={categories}
                            currentCategory={currentCategory}
                            setCurrentCategory={setCurrentCategory}
                        >
                        </Navigation>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Header;