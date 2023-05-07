import React, {useState} from 'react';
import styled from 'styled-components';

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
    const [value, setValue] = useState(User);


    const handleChange = (e: any) => {
        setValue({...value, [e.target.name]: e.target.value})
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.log(value);
    };

    return (
        <Form>
        <Label htmlFor="firstname">
            Vorname
        </Label>
        <InputField id="firstname" name="firstname" type="text" onChange={(event) =>handleChange(event)} value={value.firstname}/>
        
        <Label htmlFor='lastname'>
            Nachname
        </Label>
        <InputField id='lastname' name="lastname" type="text" onChange={(event) => handleChange(event)} value={value.lastname}/>

        <Label htmlFor='email'>
            Email
        </Label>
        <InputField id='email' name="email" type="email" onChange={(event) => handleChange(event)} value={value.email}/>

        <SubmitButton type="submit" onClick={(e) => onSubmit(e)}>Anmelden</SubmitButton>
    </Form>
    );
};

export default Formular;