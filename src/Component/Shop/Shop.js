import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Question from '../Question/Question';
import { toast } from 'react-toastify';
import { Zoom , Slide} from 'react-toastify';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart , setCart] = useState([])
    const [ranName , setRanName] = useState([])
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
            toast.success('Added to cart successfully', {
                position: "top-center",
                hideProgressBar: true, 
                transition : Slide,
                autoClose: 5000,
            })
        }
        else{
            // const rest = cart.filter(product => product.id !== selectedProduct.id);
            // newCart = [...rest , existing]
            toast.warn('Already added to cart', {
                position: "top-center",
                hideProgressBar: true, 
                transition : Slide,
                autoClose: 5000,
            })
        }
        if(newCart.length > 4){
            toast.warn('already added 4 Items',{
                position: "top-center",
                hideProgressBar: true, 
                transition : Zoom,
                autoClose: 5000,
            })
        }
        setCart(newCart.slice(0,4))
    }
    
    const randName= (props)=>{
        setRanName(props)
    }
    const resetData =()=>{
        setCart([])
        setRanName([])
    }

    return (
        <div>
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
                namesList= {ranName}
                cart = {cart}
                randomName = {randName}
                resetData = {resetData}
                ></Cart>
            </div>
        </div>
        <Question></Question>
        </div>
    );
};

export default Shop;