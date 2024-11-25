import { useContext } from "react";
import { UserContext } from "./App"; // Import the context
import { useNavigate } from "react-router-dom";
import App from "./App";


export default function Cart() {
  const { cart } = useContext(UserContext); 
  const Navigate = useNavigate()  
  const GoProducts=()=>{
    Navigate("/Products")
  }
  return (
    <div>
      <button onClick={GoProducts}>Go to Products</button>
      <ul>
        {cart.map((value, index) => (
          <div key={index}>
            <li>
            <strong className="App-imgss">{value.img}</strong> -{value.name} - {value.desc} - {value.price} - {value.qty} - 
              Total: {value.price * value.qty}
            </li>
          </div>
        ))}
      </ul>
   
    </div>
  );
}