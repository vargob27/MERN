import React, { useEffect, useState } from "react";
import axios from 'axios';

const Update = (props) => {
    const { id } = props;
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [errorMessage, setErrorMessage] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
// eslint-disable-next-line
    }, [])
    const updatePerson = (e) => {
        e.preventDefault();
        
        axios.put('http://localhost:8000/api/people/' + id, {
            firstName,  //this is shorthand for firstName: firstName
            lastName
        })
            .then(res => {
                if(res.data.errors) {
                    setErrorMessage(res.data.errors);
                } else {
                    console.log(res);
                }
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div>
            <h1>Update Person</h1>
            <form onSubmit={updatePerson}>
                {errorMessage.firstName?
                    <p>{errorMessage.firstName.message}</p>
                    :null
                }
                <p>
                    <label>First Name</label><br />
                    <input type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            <a href="http://localhost:3000/people">Back to People</a>
        </div>
    )
}
export default Update;