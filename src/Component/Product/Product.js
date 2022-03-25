import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    const {name,price,url} =props.product;
    const {addToCart} = props
    return (
        <div className="w-auto border-2 border-slate-400 rounded relative mt-12 ml-3">
            <div className="bg-slate-300">
            <div className='p-2'>
            <img className="w-auto h-72 rounded-lg" src={url} alt="" />
            </div>
            <div className="my-4">
                <h3 className="text-xl font-semibold mx-2">{name}</h3>
                <p className="mx-2 font-medium">Price: ${price}</p>
            </div>
            <br />
            <button onClick={()=>addToCart(props.product)} className='w-full bg-orange-200 rounded-b-lg absolute bottom-0 cursor-pointer flex items-center justify-center hover:bg-orange-300 h-10 text-blue-500 font-bold'><span className="mr-2 ">Add To Cart</span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;