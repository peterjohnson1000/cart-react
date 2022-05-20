import faker from 'faker';
import { useState, useContext } from 'react';
import SingleProduct from './SingleProduct';
import CartContext from '../Context';

faker.seed(1);

const Home = () => {

    const {cart, setCart} = useContext(CartContext);
    
    const productArray = [...Array(20)].map( () => ({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image: faker.random.image(),
    }));
    
    const [products] = useState(productArray)
    return (
        <div className = "productContainer">
            {products.map( (product) => (
                <SingleProduct product = {product} cart = {cart} setCart = {setCart} />
            ))};
        </div>
    );
}

export default Home;