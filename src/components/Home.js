import faker from 'faker';
import { useState } from 'react';
import SingleProduct from './SingleProduct';

faker.seed(1);

const Home = ({cart, setCart}) => {
    
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