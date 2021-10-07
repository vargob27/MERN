import React, {useEffect, useState} from "react";
import axios from "axios";
import { navigate } from "@reach/router";
const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                console.log('Deleting Product');
            })
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
// eslint-disable-next-line
    }, [])
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => { 
                deleteProduct(product._id);
                navigate('/products'); }}>
                        Delete
                    </button>
        </div>
    )
}
export default ProductDetails;