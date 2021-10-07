import React, { useState } from "react";
import axios from "axios";
// import io from 'socket.io-client';

const PersonForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorMessage, setErrorMessage] = useState({});
    // const [socket, setSocket] = useState( () => io(":8000") );
    
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>{
                if(res.data.errors) {
                    setErrorMessage(res.data.errors);
                } else {
                    console.log(res);
                    // socket.emit("added_new_person", res.data);
                    // socket.disconnect();
                }
            })
            .catch(err=>{
                console.log(err);
            })
    };

    return (
        <form onSubmit={onSubmitHandler}>
            {errorMessage.firstName?
                <p>{errorMessage.firstName.message}</p>
                :null
            }
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            {errorMessage.lastName?
                <p>{errorMessage.lastName.message}</p>
                :null
            }
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
};
export default PersonForm;