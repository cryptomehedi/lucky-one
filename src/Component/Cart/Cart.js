import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProductName from '../ProductName/ProductName';
import RandomItem from '../RandomItem/RandomItem';

const Cart = (props) => {
    const {cart} = props
    const {randomName} = props
    const {namesList} = props
    const {resetData} = props
    let newName = [];
    for(const product of cart) {
        let nameAdd = product.name
        newName.push(nameAdd)
    }

    return (
        <div className='sticky top-8 py-8 px-5 border-2 ml-2 mt-12 border-slate-500 rounded border-solid'>
            <div>
            <h4 className='text-xl font-semibold'>Selected Items Name <FontAwesomeIcon icon={faArrowDownLong}></FontAwesomeIcon> </h4><br />
            {
                newName.map(names => <ProductName name ={names} key={names}></ProductName>)
            }
            <br />
            <button onClick={() =>randomName(newName[Math.floor(Math.random()*newName.length)])} className='bg-transparent border-2 hover:text-white rounded hover:bg-green-600 font-semibold p-2 mb-3'>Choose 1 Item For ME</button>
            <br />
            <button onClick={resetData} className='bg-transparent border-2 hover:text-white w-24 rounded hover:bg-red-600 font-semibold p-2'>Rest</button>
            </div>
            <hr />
            <div>
                <RandomItem name = {namesList}></RandomItem>
            </div>
        </div>
    );
};

export default Cart;