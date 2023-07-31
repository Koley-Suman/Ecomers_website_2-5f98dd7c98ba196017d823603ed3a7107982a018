import React from "react";
import "./checkoutPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cartItem/cartItem.selector";
import { addItemToCart, cancelItemToCart, removeItemToCart } from "../../store/cartItem/cartItem-reducer";

import PaymentForm from "../../components/payment/payment";
const CheckoutPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkoutpage">
      {cartItems.map((cartItem,i) => {
        return (
          <div className="checkOutItem" key={i}>
            <img
              className="checkoutImg"
              src={cartItem.imageUrl}
              alt={cartItem.name}
            />
            <span className="details_box">
              <h2>{cartItem.name}</h2>
            </span>
            <div className="buttons details_box">
              <button onClick={() => dispatch(addItemToCart(cartItem))}>
                +
              </button>
              <h3>{cartItem.quantity}</h3>
              <button onClick={() => dispatch(removeItemToCart(cartItem))}>
                -
              </button>
            </div>
            <span className="details_box">
              <h2>${cartItem.price}</h2>
            </span>
            <span
              className=" cancel_button details_box"
              onClick={() => dispatch(cancelItemToCart(cartItem))}
            >
              <h2>X</h2>
            </span>
          </div>
        );
      })}
      <div className="cart_total">
        <h2>Total Price - ${cartTotal}</h2>
      </div>
      <PaymentForm/>
    </div>
  );
};

export default CheckoutPage;
