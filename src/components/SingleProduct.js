const SingleProduct = ({product}) => {
    return (
        <div className="products">
            <img src={product.image} alt={product.name} />
            <div className="productuctDesc">
                <span style={{ fontWeight: 700 }}>{product.name}</span>
                <br/>
                <span>₹ {product.price.substring(0, 3)}</span>
            </div>
            <button className = "add">Add to Cart</button>
        </div>
    )
};

export default SingleProduct;