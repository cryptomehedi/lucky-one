import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProductName from '../ProductName/ProductName';
import RandomItem from '../RandomItem/RandomItem';

const Cart = (props) => {
    const {cart} = props
    const {randomName} = props
    // console.log(cart);
    let newName = [];
    for(const product of cart) {
        // console.log(product);
        let nameAdd = product.name
        newName.push(nameAdd)
    }

    return (
        <div className='sticky top-8 py-8 px-5'>
            <div>
            <h4 className='text-xl font-semibold'>Selected Items Name <FontAwesomeIcon icon={faArrowDownLong}></FontAwesomeIcon> </h4><br />
            {
                newName.map(names => <ProductName name ={names} key={names}></ProductName>)
            }
            <br />
            <button onClick={()=>randomName(newName)} className='bg-transparent border-2 hover:text-white rounded hover:bg-green-600 font-semibold p-2 mb-3'>Choose 1 Item For ME</button>
            <br />
            <button className='bg-transparent border-2 hover:text-white w-24 rounded hover:bg-red-600 font-semibold p-2'>Rest</button>
            </div>
            <hr />
            <div>
                <RandomItem></RandomItem>
            </div>
        </div>
    );
};

export default Cart;