import React from 'react';
import Navigation from '../Naviation';
import Nav from 'react-bootstrap/Nav';

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
                    <Nav>
                        <Navigation
                            categories={categories}
                            currentCategory={currentCategory}
                            setCurrentCategory={setCurrentCategory}
                        >
                        </Navigation>
                    </Nav>
                </div>
            </header>
        </div>
    )
}

export default Header;