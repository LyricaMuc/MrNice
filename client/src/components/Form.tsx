import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

/*
 * Stylings
*/
const Form = styled.form`
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-top: 10px;
`;

const InputField = styled.input`
    margin-top: 10px;
`;

const SubmitButton = styled.button`
    background: #32de84;
    border: none;
    margin-top: 20px;
    padding: 10px;
`;

/*
 * Component
*/

const User = {
    firstname: '',
    lastname: '',
    email: '',
};

const Formular = () => {
    const [user, setUser] = useState(User);
    const history = useHistory();


    const handleChange = (e: any) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch('/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstname">
            Vorname
        </Label>
        <InputField id="firstname" name="firstname" type="text" onChange={(event) =>handleChange(event)} value={user.firstname}/>
        
        <Label htmlFor='lastname'>
            Nachname
        </Label>
        <InputField id='lastname' name="lastname" type="text" onChange={(event) => handleChange(event)} value={user.lastname}/>

        <Label htmlFor='email'>
            Email
        </Label>
        <InputField id='email' name="email" type="email" onChange={(event) => handleChange(event)} value={user.email}/>

        <SubmitButton type="submit">Anmelden</SubmitButton>
    </Form>
    );
};

export default Formular;