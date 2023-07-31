import React from "react";
import "./categori-item.scss";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartItem/cartItem-reducer";

const CategoriItem = ({ Item }) => {
  const { name, price, imageUrl } = Item;
  const dispatch = useDispatch();

  const additem = () => dispatch(addItemToCart(Item));
  return (
    <div>
      <div className="categories_crad">
        <div className="image_container" style={{backgroundImage:`url(${imageUrl})`}}>
          {/* <img src={imageUrl} alt={`${name}`} /> */}
        </div>
        <div className="details">
          <span>{name}</span>
          <span>${price}</span>
        </div>
        <button onClick={additem}>BUY NOW</button>
      </div>
    </div>
  );
};

export default CategoriItem;
