import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div className='shop__container'>
            <div className="products__section">
                {
                    products.map((product)=>console.log(product))
                }
            </div>
            <div className="cart__section">
                this cart area
            </div>
        </div>
    );
};

export default Shop;