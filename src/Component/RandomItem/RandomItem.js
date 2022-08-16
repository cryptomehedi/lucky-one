import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const RandomItem = (props) => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const product = data.filter(item => item.name === props.name) 
            setItem(product[0])
        })
    },[props])
    return (
        <div>
            {
                item ? <div>
                    <span className= 'font-semibold '>Our Suggestion Product: </span><br /> 
                    <div className='flex justify-center'>
                        <img className='h-32 ' src={item?.url} alt="" />
                    </div>
                    <h2 className= 'tracking-tighter text-sm font-bold '>Name: <span className=' text-lime-600'>{ item?.name?.length < 24 ? item?.name : <span>{item?.name?.slice(0,20)}...</span> }</span></h2>
                    <h2 className= 'tracking-tighter text-2xl font-bold text-red-500'>Price: ${item?.price}</h2>
    
                </div> : ''
            }
        </div>
    );
};

export default RandomItem;