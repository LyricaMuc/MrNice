import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from '../components/Modal';
import Formular from '../components/Form';


/* 
 * Types
*/
type NavigationProps = {
    className?: string;
}

/* 
 * Styling
*/
const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background: rgba(230, 57, 70, 0.9);
`;
const UnorderedList = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 15px 0;
`;

const ListItem = styled.li`
    padding-right: 2em;
    cursor: pointer;

    &:hover {
        color: #FFFFFF;
    }
`;

const Button = styled.button`
    cursor: pointer;
    margin: 7px 0;
    border-radius: 15px;
    border: none;
`;

const LoginHeader = styled.h1`
    text-align: center;
`;

const LoginText = styled.p`
    text-align: center;
`;

/* 
 * Component
*/
const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
    const { className } = props;

    const [isActive, setIsActive] = useState(false);
    return (
        <>
        {isActive &&
            <Modal isActive={isActive} onClose={() => setIsActive(false)}> 
                <LoginHeader>Login</LoginHeader>
                <LoginText>
                    Bitte melde Dich an, um in den Premium Bereich zu wechseln
                </LoginText>
                <Formular />
            </Modal>
        }
        <Navbar className={className}>
            <UnorderedList>
                <ListItem>
                    Home
                </ListItem>
                <ListItem>
                    Media
                </ListItem>
                <ListItem>
                    Updates
                </ListItem>
                <ListItem>
                    Impressum
                </ListItem>
            </UnorderedList>
            <Button onClick={() => setIsActive(true)}>Anmeldung</Button>
        </Navbar>        
        </>
    );
};

export default Navigation;
