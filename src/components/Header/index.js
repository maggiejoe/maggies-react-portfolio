import React from 'react';
import Navigation from '../Naviation';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Header(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props

    return (
        <Navbar sticky='top'>
                <Container>
                    <div>
                        <Navbar.Brand className='m-2 fw-bolder fs-1'>Maggie Joseph</Navbar.Brand>
                    </div>
                    <Nav className='nav-item'>
                        <Navigation
                            categories={categories}
                            currentCategory={currentCategory}
                            setCurrentCategory={setCurrentCategory}
                        >
                        </Navigation>
                    </Nav>
                </Container>
        </Navbar>
    )
}

export default Header;