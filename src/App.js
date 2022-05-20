import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import CartProvider  from './Provider';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
          <div className = 'App'>
            <Header />
            <Routes>
              <Route path = "/" element = { <Home/> } />
              <Route path = "/Cart" element = { <Cart /> } />
            </Routes>
          </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;