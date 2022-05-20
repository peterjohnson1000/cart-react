import { useEffect, useState, useContext } from 'react';
import SingleProduct from './SingleProduct';
import CartContext from '../Context';

const Cart = () => {

    const {cart, setCart} = useContext(CartContext);
    const [total, setTotal] = useState();

    useEffect( () => {
        setTotal(cart.reduce( (acc,curr) => acc + Number(curr.price), 0));
    }, [cart])
    return (
        <div>
            <h2>My Cart</h2>
            <br />
            <h3>Total : Rs.{total}</h3>
            <div className = "productContainer">
                {cart.map( (product) => (
                    <SingleProduct product = {product} cart = {cart} setCart = {setCart}/>
                ) )}
            </div>
        </div>
    );
}

export default Cart;