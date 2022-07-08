import React from 'react';
import Navigation from '../Naviation';

function Header(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props

    return (
        <div>
            <header>
                <div>
                    <div>
                        <h1>Maggie Joseph</h1>
                    </div>
                    <nav>
                        <Navigation
                            categories={categories}
                            currentCategory={currentCategory}
                            setCurrentCategory={setCurrentCategory}
                        >
                        </Navigation>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;