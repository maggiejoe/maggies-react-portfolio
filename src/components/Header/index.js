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
        <section id='header' className='d-flex flex-column justify-content-between align-items-center'>
            <header className=''>
                <div className=''>
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
                    {/* <Footer></Footer> */}
                </div>
            </header>
        </section>
    )
}

export default Header;