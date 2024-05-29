import React, { useState } from 'react';
import './Home.css'

// Sample shoe data
const shoes = [
  {
    id: 1,
    name: 'Nike Air Max',
    price: 120,
    imageUrl: 'https://source.unsplash.com/featured/?sneaker,nike',
  },
  {
    id: 2,
    name: 'Adidas Ultra',
    price: 180,
    imageUrl: 'https://source.unsplash.com/featured/?sneaker,adidas',
  },
  {
    id: 3,
    name: 'Puma RS-X',
    price: 110,
    imageUrl: 'https://source.unsplash.com/featured/?sneaker,puma',
  },
  {
    id: 4,
    name: 'Sneaker R',
    price: 110,
    imageUrl: 'https://source.unsplash.com/featured/?sneaker,sneaker',
  },
  {
    id: 5,
    name: 'Bata X',
    price: 110,
    imageUrl: 'https://source.unsplash.com/featured/?sneaker,bata',
  },{
    id: 6,
    name: 'Paragoan Y',
    price: 110,
    imageUrl: 'https://source.unsplash.com/featured/?sneaker,paragoan',
  }
];

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...shoe, quantity: 1 }];
    });
  };

  const removeFromCart = (shoeId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === shoeId);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== shoeId);
      }
      return prevCart.map((item) =>
        item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='container' >
      <div className='left-container' >
        {shoes.map((shoe) => (
          <div key={shoe.id} className='card'>
            <img src={shoe.imageUrl} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>${shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className='right-container' >
      <h2>Shopping Cart</h2>
        {cart.length === 0 && <p>Your cart is empty</p>}
        {cart.map((item) => (
          <div key={item.id} className='right-card'>
            <img src={item.imageUrl} alt={item.name} />
            <div className='right-card-content'>
              <h3>{item.name}</h3>
              <p className='price'>${item.price}</p>
            </div>
            <div className='quantity-controls'>
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        ))}
        <h3>Total: ${cartTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Home;
