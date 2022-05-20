import { useContext } from 'react';
import cartContext from '../Context';

const SingleProduct = ({product}) => {

    const {cart, setCart} = useContext(cartContext);

    const addToCart = () => {
        setCart([...cart,product]);
    }

    const removeFromCart = () => {
        setCart(cart.filter( (c) => c.id !== product.id));
    }

    return (
        <div className="products">
            <img src={product.image} alt={product.name} />
            <div className="productuctDesc">
                <span style={{ fontWeight: 700 }}>{product.name}</span>
                <br/>
                <span>₹ {product.price.substring(0, 3)}</span>
            </div>

            {cart.includes(product) ? (
                 <button onClick = {removeFromCart} className = "add">Remove From Cart</button>     
            ) : <button onClick = {addToCart} className = "add">Add to Cart</button> }

            
        </div>
    )
};

export default SingleProduct;