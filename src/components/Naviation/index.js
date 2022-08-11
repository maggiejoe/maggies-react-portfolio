import React from 'react';

function Navigation(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props

    return (
        <div className=''>
            
            <div className='justify-content-center align-items-center shadow-lg'>
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