import React from 'react';
import "./homePage.scss"
import Directry from '../../components/directry/directry';
const HomePage = () => {
    const catagoris = [
        {
          id: 1,
          name: "Hat",
          imageurl: "./photos/hat.jpg",
          rout: "shop/hats",
        },
        {
          id: 2,
          name: "Jacket",
          imageurl: "./photos/jacket.jpg",
          rout: "shop/jackets",
        },
        {
          id: 3,
          name: "Shoes",
          imageurl: "./photos/shoes.jpeg",
          rout: "shop/sneakers",
        },
        {
          id: 4,
          name: "Women",
          size: "large",
          imageurl: "./photos/women.jpg",
          rout: "shop/womens",
        },
        {
          id: 5,
          name: "Men",
          size: "large",
          imageurl: "./photos/men.jpg",
          rout: "shop/mens",
        },
      ];
    return (
        <div className='homePage'>  
            {
                catagoris.map((catagori)=>
                    <Directry key={catagori.id} name={catagori.name} size={catagori.size} img={catagori.imageurl} rout={catagori.rout}/>
                )
            }
        </div>
    );
}

export default HomePage;
