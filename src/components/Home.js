import faker from 'faker';
import { useState } from 'react';
import SingleProduct from './SingleProduct';

const Home = () => {
    
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
                <SingleProduct product = {product}/>
            ))};
        </div>
    );
}

export default Home;