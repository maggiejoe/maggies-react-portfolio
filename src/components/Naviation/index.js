import React from 'react';

function Navigation(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props

    return (
        <div>
            {categories.map((category) => (
                <li
                    className={`m-1 ${currentCategory.name === category.name && ""
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