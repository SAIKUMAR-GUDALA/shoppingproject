import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import Cart from "./Cart";
import { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

function App() {
  const [cart, setCart] = useState([]); // Moved cart state to App level

  return (
    <UserContext.Provider value={{ cart, setCart }}> {/* Provide context here */}
      <div className="App">
        <BrowserRouter>
          <div className="App-header">
            <h1>My Shopping Cart</h1>
            <div>
              <Link to="/products">Products</Link>|<Link to="/login">Login</Link>|<Link to="/cart">Cart</Link>
            </div>
          </div>
          <div>
            <Routes>
              <Route index element={<Products />} />
              <Route path="products" element={<Products />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
