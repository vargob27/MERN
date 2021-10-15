import React, { useEffect, useState } from "react";
import { Link } from '@reach/router';
import axios from "axios";

const AllAuthors = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);
    const getAuthors = () => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAllAuthors(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getAuthors();
    }, []);
    const removeFromDom = authorID => {
        setAllAuthors(allAuthors.filter(author => author._id !== authorID));}
    const deleteAuthor = (authorID) => {
        axios.delete('http://localhost:8000/api/authors/' + authorID)
            .then(res => {
                removeFromDom(authorID)
            })
    }

    return (
        <div>
            <div className="top">
                <div className="title">
                    <h1>Favorite Authors</h1>
                    <h2>We have quotes by these authors</h2>
                </div>
                <div className="nav">
                    <Link to='/authors/new' className='nav'>Add an Author </Link>
                </div>
            </div>
            <table className="petTable">
                <tbody>
                    <tr>
                        <th>Authors</th>
                        <th>Actions Available</th>
                    </tr>
                    {allAuthors.sort((a, b) => (a.authorName.localeCompare(b.authorName))).map((author, index) =>
                        <tr key={index}>
                            <td>{author.authorName}</td>
                            <td><button onClick={(e) => { deleteAuthor(author._id) }}>Delete </button> | <Link to={`/authors/${author._id}/edit`}>Edit</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;