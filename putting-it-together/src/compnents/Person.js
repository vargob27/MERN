import React, {useState} from 'react';

const Person = (props) => {
    const [age, setAge] = useState(props.age);
    const {firstName, lastName, hairColor} = props;

    return (
        <div className="container">
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setAge(age + 1)}>
                Birthday Button for {firstName} {lastName}
            </button>
        </div>
    );
}
export default Person;