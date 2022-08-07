import React from 'react';

function Navigation(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props

    return (
        <div className=''>
            <div className='d-flex flex-wrap pt-4 pb-5 mb-5 align-items-start justify-content-center border border-dark'>
                <h1>Maggie</h1>
                <p>Web Developer</p>
            </div>
            <div className='justify-content-center border-top border-dark mt-5'>
                {categories.map((category) => (
                    <li
                        id='navText' className={`p-3 border-bottom border-dark ${currentCategory.name === category.name && ""
                            }`}
                        key={category.name}
                    >
                        <span
                            onClick={() => {
                                setCurrentCategory(category.name);
                            }}>
                            {category.name}
                        </span>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default Navigation; 