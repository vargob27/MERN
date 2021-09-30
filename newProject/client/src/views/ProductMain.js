import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'


const ProductMain = () => {
    const [message, setMessage] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))
            .catch((err) => console.log('something went wrong connecting to API'))
    }, []);
    return (
        <div>
            <ProductForm/>
        </div>
    )
}
export default ProductMain;