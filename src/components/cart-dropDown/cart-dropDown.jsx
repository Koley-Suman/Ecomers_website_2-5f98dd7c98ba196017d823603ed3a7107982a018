import React, { Fragment } from "react";
import "./cart-dropDown.scss";
import CartItem from "../cartItem/cartItem";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectIsCartOpen } from "../../store/cartItem/cartItem.selector";
import { useNavigate } from "react-router-dom";
import { setIscartOpen } from "../../store/cartItem/cartItem-reducer";

const CartDropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const iscartOpen = useSelector(selectIsCartOpen)
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  const checkHandaler = () => {
    navigate("/checkout");
    dispatch(setIscartOpen(!iscartOpen))
  }
  return (
    <Fragment>
      <div className="cart-box">
        <div className="cart-item">
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </div>
        <div className="Item-checkout">
          <button onClick={checkHandaler}>CHECKOUT</button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartDropDown;
