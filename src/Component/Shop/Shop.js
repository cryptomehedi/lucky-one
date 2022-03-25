import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart , setCart] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const addToCart = (selectedProduct) => {
        let newCart;
        // console.log(newCart);
        
        const existing = cart.find(product => product.id === selectedProduct.id);
        if (!existing) {
            newCart = [...cart , selectedProduct]
        }
        else{
        const rest = cart.filter(product => product.id !== selectedProduct.id);
        newCart = [...rest , existing]
        }
        if(newCart.length > 4){
            alert('already added 4 Items')
        }
        setCart(newCart.slice(0,4))
    }

    const randomName= (name)=>{
        
        let number = name.length ;
            // console.log(name.length);
            number = Math.floor(Math.random()* (name.length))
        if(number != 0){
        console.log(number);
        console.log(name[number-1]);
        }else{
            console.log("zero");
        }
        
    }

    return (
        <div className="grid grid-cols-shop_col w-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(product => <Product 
                        product={product}
                        key = {product.id}
                        addToCart = {addToCart}
                        ></Product>
                    )
                }
            </div>
            <div>
                <Cart
                cart = {cart}
                randomName = {randomName}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;