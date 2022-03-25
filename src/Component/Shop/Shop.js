import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="grid grid-cols-shop_col w-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(product => <Product 
                        product={product}
                        key = {product.id}
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