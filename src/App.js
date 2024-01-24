import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function App() {
  const [cartItemIds, setCartItemIds] = useState([]);
  const det = [
    {
      name:"Dove Shampoo",
      image:"https://realmart.com.bd/wp-content/uploads/2023/01/0338972_dove-daily-shine-shampoo-680ml.webp",
      star:"4",
      price:"Rs.190",
    },
    {
      name:"Meera Shampoo",
      image:"https://static.wixstatic.com/media/a962c7_19ec4c95b5eb43a7af19499406827773~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a962c7_19ec4c95b5eb43a7af19499406827773~mv2.jpg",
      star:"5",
      price:"Rs.230",
    },
    {
      name:"Neutrogena Sunscreen",
      image:"https://assets.shop.loblaws.ca/products/21238463/b2/en/front/21238463_front_a06_@2.png",
      star:"4",
      price:"Rs.260",
    },
    {
      name:"Himalaya Orange facewash",
      image:"https://medilife-s3.s3.me-central-1.amazonaws.com/uploads/all/sdugrGWO0J5MrdHP6ALQbwl69PTnxVPIxdnL0HXM.jpg",
      star:"4",
      price:"Rs.125",
    },
    {
      name:"Glow & lovely",
      image:"https://m.media-amazon.com/images/I/51w8G4iJZKL.jpg",
      star:"4.5",
      price:"Rs.270",
    },
    {
      name:"Parachute Coconut Oil",
      image:"https://alrabiemart.com/image/cache/cache/8001-9000/8437/main/7a61-6281006567108-1-0-1-1000x1000.jpg",
      star:"4.5",
      price:"Rs.99",
    },
  ];

  const addToCart = (itemId) => {
    setCartItemIds([...cartItemIds, itemId]);
  };

  return (
    <div className='container'>
      <h1 className='head'><i>Stop Here🛑 Shop Here🛍</i></h1>
      <button className='butt' style={{ float: "right", width: "70px" }}>
        <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartItemIds.length})
      </button>
      <div className='row'>
        {det.map((item, index) => (
          <Card
            key={index}
            itemId={index} // assuming each item has a unique identifier (you can replace it with a proper identifier)
            name={item.name}
            image={item.image}
            star={item.star}
            price={item.price}
            isAdded={cartItemIds.includes(index)}
            addToCart={() => addToCart(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
