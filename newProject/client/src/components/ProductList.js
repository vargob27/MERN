import React from "react";
import { Link } from '@reach/router';
const ProductList = (props) => {
    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, index) => {
                return <p key={index}><Link to={`/products/${product._id}`}>{product.title}: {product.description} - ${product.price}</Link></p>
            })}
        </div>
    )
}
export default ProductList;