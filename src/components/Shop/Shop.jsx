import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                <Cart cart ={cart}/>
            </div>
        </div>
    );
};

export default Shop;