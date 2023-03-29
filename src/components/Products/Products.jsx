import React from 'react';
import "./Products.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <div className="product-info">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>price : {price}</p>
                <p>Menufacture : {seller}</p>
                <p>ratting : {ratings} star</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className="btn">
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Products; 