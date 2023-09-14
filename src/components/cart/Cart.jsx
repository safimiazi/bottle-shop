import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h4>cart: {cart.length}</h4>
            <div className='cart'>
                {
                    cart.map(bottle => <img src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;