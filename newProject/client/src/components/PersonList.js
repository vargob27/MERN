import React from "react";
import { Link } from '@reach/router';
import axios from "axios";
// import io from 'socket.io-client';
const PersonList = (props) => {
    // const [persons, setPersons] = useState([]);
    // const [socket, setSocket] = useState(() => io(":8000"));

    // useEffect(() => {
    //     console.log("inside useEffect for Socket IO");
    //     socket.on("connect", () => {
    //         console.log(`Connected on the client - ID: ${socket.id}`);
    //     })
    //     socket.on("new_person_added", (data) => {
    //         console.log("new_movie_added");
    //         console.log(data)
    //         let updatedPersonArrray = [data, ...props.people]
    //         setPersons(updatedPersonArrray)
    //     })
    // }, []);

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