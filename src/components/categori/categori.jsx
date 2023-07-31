import React, { useEffect, useState } from 'react';
import "./categori.scss";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/products/product-selector';
import CategoriItem from '../categori-item/categori-item';

const Categori = () => {
    const {category} = useParams();
    const catagoriesMap = useSelector(selectCategoriesMap);
    console.log(catagoriesMap);
    const [products,setProducts] = useState(catagoriesMap[category]) ;
    

    useEffect(()=>{
        setProducts(catagoriesMap[category])
        console.log(products)
       
    },[category,catagoriesMap])
    return (
        <div className='catagori_page'>
            {products && products.map((product)=><CategoriItem key={product.id} Item={product}/>)}
            
        </div>
    );
}

export default Categori;
