import React, {useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

function App() {

  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <BrowserRouter>
      <div className = 'App'>
        <Header />
        <Routes>
          <Route path = "/" element = { <Home cart = {cart} setCart = {setCart} /> } />
          <Route path = "/Cart" element = { <Cart cart = {cart} setCart = {setCart} /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
