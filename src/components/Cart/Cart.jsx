import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let total = 0;
    let shipping = 0;
    for(const product of props.cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    let tax = parseInt(total*7/100);
    let grandTotal = total + tax +shipping ;

    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <h4>Items : {props.cart.length}</h4>
            <h4>Total price : ${total}</h4>
            <h4>Total shipping : ${shipping}</h4>
            <h4>Tax : {tax.toFixed(2)}</h4>
            <h3>Grand Total : {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;