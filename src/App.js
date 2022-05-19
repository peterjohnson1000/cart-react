import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className = 'App'>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/Cart" element = {<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
