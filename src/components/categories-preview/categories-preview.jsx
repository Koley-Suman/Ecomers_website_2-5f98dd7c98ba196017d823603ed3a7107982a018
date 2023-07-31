import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/products/product-selector";
import CategoriItem from "../categori-item/categori-item";
import "./categories-preview.scss"

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  return (
    <div>
      {Object.keys(categories).map((title, i) => {
        return (
          <Fragment key={i}>
            <h2>{title.toUpperCase()}</h2>
            <div className="categories-container">
              {categories[title]
                .filter((_, idx) => idx < 4)
                .map((Item) => {
                  return <CategoriItem key={Item.id} Item={Item} />;
                })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
