import React from 'react';

const ProductName = ({name}) => {
    return (
        <div>
            <li className="text-lime-700 font-semibold list-outside ">{name}</li>
        </div>
    );
};

export default ProductName;