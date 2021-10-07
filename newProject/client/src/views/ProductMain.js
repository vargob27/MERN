import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const ProductMain = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/")
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    }, []);

    const removerFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    // const addToDom = productId => {
    //     setProducts(products.push(product => product._id !== productId))
    // }
    return (
        <div>
            <h1>Product Manager:</h1>
            <ProductForm/>
            <hr/>
            { loaded && <ProductList products={products} removeFromDom={removerFromDom}/> }
        </div>
    )
}
export default ProductMain;