import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop__container'>
            <div className="products__section">
                {
                    products.map((product)=><Products 
                    product ={product} 
                    key={product.id} 
                    handleAddToCart ={handleAddToCart}
                    />)
                }
            </div>
            <div className="cart__section">
               <h3>Order Summery</h3>
               <h4>Items : {cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;