import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateProduct = (props) => {
    const { id } = props;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
// eslint-disable-next-line
    }, [])
    const updateProductHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProductHandler}>
                <label>Title</label><br />
                <p>
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <label>Price</label><br />
                <p>
                    <input type="number"
                        name="price"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <label>Description</label><br />
                <p>
                    <textarea rows="3" cols="30"
                        name="description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            <a href="http://localhost:3000/products">Back to Products</a>
        </div>
    )
}
export default UpdateProduct;