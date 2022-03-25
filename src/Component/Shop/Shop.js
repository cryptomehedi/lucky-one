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
        const existing = cart.find(product => product.id === selectedProduct.id);
        if (!existing) {
            // selectedProduct.quantity = 1
            newCart = [...cart , selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            // existing.quantity = existing.quantity + 1
            newCart = [...rest , existing]
        }
        console.log(newCart);
        setCart(newCart)
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
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;