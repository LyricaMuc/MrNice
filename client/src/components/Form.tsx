import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

/*
 * Types
*/ 

interface User {
    firstname?: string;
    lastname?: string;
    email?: string;
}

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
    padding: 5px 0;
`;

const SubmitButton = styled.button`
    color: white;
    background: #32de84;
    border: none;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
`;

const ErrorText = styled.p`
    font-size: 11px;
    color: red;
`;

/*
 * Component
*/

const Formular: React.FC = () => {
    const [user, setUser] = useState<User>({});
    const [error, setError] = useState<String>('');
    const navigate = useNavigate();


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

        if (data.success) {
            navigate('/home');
        } else {
            setError(data.error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstname">
            Vorname
        </Label>
        <InputField id="firstname" name="firstname" type="text" onChange={(event) =>handleChange(event)} value={user.firstname || ''}/>
        
        <Label htmlFor='lastname'>
            Nachname
        </Label>
        <InputField id='lastname' name="lastname" type="text" onChange={(event) => handleChange(event)}/>

        <Label htmlFor='email'>
            Email
        </Label>
        <InputField id='email' name="email" type="email" onChange={(event) => handleChange(event)}/>

        <SubmitButton type="submit">Anmelden</SubmitButton>
        {error && <ErrorText>{error}</ErrorText>}
    </Form>
    );
};

export default Formular;