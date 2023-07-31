import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./directry.scss"

const Directry = ({ name, size, img, rout }) => {
    const navigate = useNavigate();
  return (
    <div className={`${size} catagoriItem_box`} onClick={()=>navigate(rout)}>
      <div
        className="catagoriItem"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="titleBox">
          <h1>{name}</h1>
          <h3>shop now</h3>
        </div>
      </div>
    </div>
  );
}

export default Directry;
