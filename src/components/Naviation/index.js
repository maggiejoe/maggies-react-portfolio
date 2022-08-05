import React from 'react';

function Navigation(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props

    return (
        <div className='navbar justify-content-end p-4'>
            {categories.map((category) => (
                <li
                    id='navText' className={`m-1 px-4 ${currentCategory.name === category.name && ""
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
    );
}

export default Navigation; 