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
        <section id='header' className='d-flex flex-column justify-content-between align-items-center shadow-lg'>
            <header className=''>
                <div className=''>
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