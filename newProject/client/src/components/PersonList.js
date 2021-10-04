import React from "react";
import { Link } from '@reach/router';
import axios from "axios";
const PersonList = (props) => {
    const { removeFromDom } = props;
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
    }
    return (
        <div>
            {props.people.map((person, index) => {
                return <p key={index}>
                    <Link to={"/people/" + person._id}>
                        {person.lastName}, {person.firstName}
                    </Link>
                    |
                    <Link to={"/people/" + person._id + "/edit"}>
                        Edit
                    </Link>
                    |
                    <button onClick={(e) => { deletePerson(person._id) }}>
                        Delete
                    </button>
                </p>
            })}

        </div>

    )
}
export default PersonList;