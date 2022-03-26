import React from 'react';

const RandomItem = (props) => {
    
    return (
        <div>
            <span className= 'text-2xl font-semibold '>Our Suggestion Product: </span><br /> <span className= 'tracking-tighter text-2xl font-bold text-lime-600'>{props.name}</span>
        </div>
    );
};

export default RandomItem;