import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const EditAuthor = (props) => {
    const [authorName, setAuthorName] = useState('');
    const [placeHolder, setPlaceHolder] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res => {
                setPlaceHolder(res.data.authorName);
                setAuthorName(res.data.authorName);
            })
            .catch(err => console.log(err))
    }, [props._id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${props._id}`, {
            authorName
        })
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate('/');
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to='/' className='nav'>back to home</Link>
            <h1>Favorite Authors</h1>
            <h2>Edit {placeHolder}</h2>
            <fieldset>
                <form className="petForm" onSubmit={submitHandler}>
                    <div className="row1">
                        {errors.authorName ?
                            <p>{errors.authorName.message}</p>
                            : null
                        }
                        <p>
                            <label>Author Name</label><br />
                            <input type="text" name="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                        </p>
                    </div>
                    <input type='submit' value='Submit' className="button" />
                    <Link to='/' className="cancel">Cancel</Link>
                </form>
            </fieldset>
        </div>
    )
}
export default EditAuthor;