import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../components/Modal';
import Formular from '../components/Form';

/*
 * Styling
*/
const Container = styled.div``;

const Button = styled.button``;

const LoginHeader = styled.h1`
    text-align: center;
`;

const LoginText = styled.p`
    text-align: center;
`;

const Welcome = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Container>
            {isActive &&
            <Modal isActive={isActive} onClose={() => setIsActive(false)}> 
                <LoginHeader>Login</LoginHeader>
                <LoginText>
                    Bitte melde Dich an, um in den Premium Bereich zu wechseln
                </LoginText>
                <Formular />
            </Modal>}
            <Button onClick={() => setIsActive(true)}>Hier geht es zur Anmeldung</Button>
        </Container>

    );
};

export default Welcome;