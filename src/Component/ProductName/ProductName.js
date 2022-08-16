import React from 'react';

const ProductName = ({name, i}) => {
    return (
        <div>
        <p className="text-lime-700 font-semibold list-outside ">{i +1}. { name.length < 24 ? name : <span>{name.slice(0,20)}...</span> }</p>
        </div>
    );
};

export default ProductName;