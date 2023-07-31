import React, { Fragment } from "react";
import "./navigation.scss";
import { Link, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { signOutUser } from "../../utilitis/firebase/firebase";
import CartDropDown from "../cart-dropDown/cart-dropDown";
import { selectIsCartOpen } from "../../store/cartItem/cartItem.selector";
import CartIcon from "../cartIcon/cartIcon";
const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const iscartOpen = useSelector(selectIsCartOpen);
  console.log(iscartOpen);
  return (
    <Fragment>
      <div className="navber">
        <div className="logo">
          <ul>
            <Link to="/">HOME</Link>
          </ul>
        </div>
        <div className="links">
          <ul>
            <Link to="/shop">SHOP</Link>
            {currentUser ? (
              <Link onClick={signOutUser}>SIGN OUT</Link>
            ) : (
              <Link to="/auth">SIGN IN</Link>
            )}
            <Link>
            <CartIcon/>
              
            </Link>
            {iscartOpen&&<CartDropDown/>}
            
          </ul>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
