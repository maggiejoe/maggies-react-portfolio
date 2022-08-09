import React from 'react';

function Navigation(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props

    return (
        <div className=''>
            <div className='nav-bg d-flex flex-wrap pt-4 pb-5 mb-5 align-items-start justify-content-center shadow-lg'>
                <h1 className='name-text-header'>Maggie</h1>
                <p className='all-text'>Web Developer</p>
            </div>
            <div className='justify-content-center align-items-center shadow-lg mt-5'>
                {categories.map((category) => (
                    <li
                        id='navText' className={`p-3 nav-bg shadow-lg ${currentCategory.name === category.name && ""
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