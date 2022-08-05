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
            <header className="">
                <div className='justify-content-end align-items-end'>
                    {/* <div className='py-4'>
                        <h3 id='headerText' className='fw-bolder fs-1 px-4'>Maggie Joseph</h3>
                    </div> */}
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