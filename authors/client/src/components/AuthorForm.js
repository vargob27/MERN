import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AuthorForm = () => {
    const [authorName, setAuthorName] = useState('');
    const [errors, setErrors] = useState({});

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            authorName,
        })
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate('/')
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Link to='/' className='nav'>back to home</Link>
            <h1>Favorite Authors</h1>
            <h2>Add a new Author</h2>
            <div className="fContainer">
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
        </div>
    )
}
export default AuthorForm;