import React, { useContext, useState } from "react";
import { UserContext } from "./App"; // Import the context
import App   from "./App";

export default function Products() {
  const item = [
    { name: "Product 1", desc: "This is a dummy description", price: 30, img: <img className="App-img" src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600"></img> },
    { name: "Product 2", desc: "This is a dummy description", price: 80, img: <img className="App-img" src="https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=600"></img> },
    { name: "Product 3", desc: "This is a dummy description", price: 70, img: <img className="App-img" src="https://images.pexels.com/photos/3216564/pexels-photo-3216564.jpeg?auto=compress&cs=tinysrgb&w=600"></img> },
    { name: "Product 4", desc: "This is a dummy description", price: 90, img: <img className="App-img" src="https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg?auto=compress&cs=tinysrgb&w=600"></img> },
    { name: "Product 5", desc: "This is a dummy description", price: 50, img: <img className="App-img" src="https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg?auto=compress&cs=tinysrgb&w=600"></img> },
    { name: "Product 6", desc: "This is a dummy description", price: 40, img: <img className="App-img" src="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600"></img> },
    { name: "Product 7", desc: "This is a dummy description", price: 80, img: <img className="App-img" src="https://images.pexels.com/photos/1710023/pexels-photo-1710023.jpeg?auto=compress&cs=tinysrgb&w=600"></img> },
    { name: "Product 8", desc: "This is a dummy description", price: 60, img: <img className="App-img" src="https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=600"></img>},
  ];
  
  const [product, setProduct] = useState(item);
  const { cart, setCart } = useContext(UserContext); // Access cart from context
   
  const addProduct = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) => {
          if (cartItem.name === item.name) {
            return { ...cartItem, qty: cartItem.qty + 1 };
          }
          return cartItem;
        });
      } else {
        return [...prevCart, { ...item, qty: 1 }];
      }
    });
  };

  const deleteProduct = (value) => {
    setCart(cart.filter((product) => product.name !== value.name));
  };
  return (
    <div className="App-products">
      {product.map((value, index) => (
        <div className="App-item" key={index}>
          {value.img}
          <h3>{value.name}</h3>
          <p>{value.desc}</p>
          <div className='App-cost'>
            <h4>{value.price}</h4>
            <button onClick={() => addProduct(value)} className="App-btn-add">Add</button>
          </div>
        </div>
      ))}
      <hr />
      <ul>
        {cart.map((value, index) => (
          <div key={index}>
            <li>
              {value.name} - {value.desc} - {value.price} - {value.qty} - 
              <button onClick={() => deleteProduct(value)}>Delete</button> - 
              Total amount: {value.price * value.qty}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}