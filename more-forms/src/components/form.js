import React, { useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [firstNameError, setFirstNameError] = useState('');
    // const [lastNameError, setLastNameError] = useState('');
    // const [emailError, setEmailError] = useState('');
    // const [passwordError, setPasswordError] = useState('');
    // const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasBeenSubmitted(true);
    }

    // const handleFirst = (e) => {
    //     if(e.target.value.length < 2) {
    //         setFirstNameError('First Name must be 2 characters or more')
    //     } else {
    //         setFirstNameError('');
    //         setFirstName(e.target.value);
    //     }
    // }
    // const handleLast = (e) => {
    //     if(e.target.value.length < 2) {
    //         setLastNameError('Last Name must be 2 characters or more')
    //     } else {
    //         setLastNameError('');
    //         setLastName(e.target.value);
    //     }
    // }
    // const handleEmail = (e) => {
    //     if(e.target.value.length < 5) {
    //         setEmailError('Email must be 5 characters or more')
    //     } else {
    //         setEmailError('');
    //         setEmail(e.target.value);
    //     }
    // }
    // const handlePassword = (e) => {
    //     if(e.target.value.length < 8) {
    //         setPasswordError('Password must be 8 characters or more')
    //     } else {
    //         setPasswordError('');
    //         setPassword(e.target.value);
    //     }
    // }
    // const handleConfirmPassword = (e) => {
    //     if(password !== e.target.value) {
    //         setConfirmPasswordError('Passwords do not match')
    //     } else {
    //         setConfirmPasswordError('');
    //         setConfirmPassword(e.target.value);
    //     }
    // }



    // const createUser = (e) => {
    //     e.preventDefault();

    //     const newUser = {firstName, lastName, email, password};
    //     setFirstName('');
    //     setLastName('');
    //     setEmail('');
    //     setPassword('');

    //     setHasBeenSubmitted(true);
    // }

    return (
        <div>
            {hasBeenSubmitted ?
                <div>
                    <h3>Form Data</h3>
                    <p>
                        <label>First Name: </label>{firstName}
                    </p>
                    <p>
                        <label>Last Name: </label>{lastName}
                    </p>
                    <p>
                        <label>Email: </label>{email}
                    </p>
                    <p>
                        <label>Password: </label>{password}
                    </p>
                    <p>
                        <label>Confirm Password: </label>{confirmPassword}
                    </p>
                </div> :
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input type='text' name='firstName' onChange={(e) => setFirstName(e.target.value)} />
                        {
                            firstName.length > 0 ?
                                firstName.length < 2 ?
                                    <p className='error'>First Name must be ast least 2 characters long</p>
                                    : null
                                : null
                        }
                    </div>

                    <div>
                        <label htmlFor='lastName'>Last Name: </label>
                        <input type='text' name='lastName' onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    {
                        lastName.length > 0 ?
                            lastName.length < 2 ?
                                <p className='error'>Last Name must be ast least 2 characters long</p>
                                : null
                            : null
                    }
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {
                        email.length > 0 ?
                            email.length < 5 ?
                                <p className='error'>Email must be ast least 5 characters long</p>
                                : null
                            : null
                    }
                    <div>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {
                        password.length > 0 ?
                            password.length < 8 ?
                                <p className='error'>Password must be ast least 8 characters long</p>
                                : null
                            : null
                    }
                    {
                        password.length >= 8 && confirmPassword.length > 0 ?
                            password !== confirmPassword ?
                                <p className='error'>Passwords do not match</p>
                                : null
                            : null
                    }
                    <div>
                        <label htmlFor='confirmPassword'>Confirm Password: </label>
                        <input type='password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    {/* <button onClick={() => setHasBeenSubmitted(true)} >Submit</button> */}
                    <button type='submit' >Submit</button>
                </form>}


        </div>
    )
}

export default Form;