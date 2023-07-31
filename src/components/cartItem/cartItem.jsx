import React from 'react';
import "./cartItem.scss"

const CartItem = ({cartItem}) => {
    const {price,imageUrl,name,quantity} =  cartItem
    return (
        <div className='cart_item_box'>
        <img className='cart_image' src={imageUrl} alt={name} />
        <div className='cart_name_box'>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
        </div>
    </div>
    );
}

export default CartItem;
