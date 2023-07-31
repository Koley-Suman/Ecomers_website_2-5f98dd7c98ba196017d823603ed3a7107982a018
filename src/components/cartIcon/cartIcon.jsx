import React, { Fragment } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIscartOpen } from "../../store/cartItem/cartItem-reducer";
import { selectCartCount,selectIsCartOpen } from "../../store/cartItem/cartItem.selector";
const CartIcon = () => {
    const dispatch = useDispatch();
    const iscartOpen = useSelector(selectIsCartOpen);
    const cartcount = useSelector(selectCartCount)
    const cartToggle = () =>{
        dispatch(setIscartOpen(!iscartOpen))
    }
  return (
    <Fragment>
      <IconButton onClick={cartToggle}>
        <Badge color="secondary" badgeContent={cartcount}>
          <ShoppingBagIcon />
        </Badge>
      </IconButton>
    </Fragment>
  );
};

export default CartIcon;
