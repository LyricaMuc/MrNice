import React, { useState } from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation';

/*
 * Styling
*/
const Container = styled.div``;

const Welcome = () => {

    return (
        <Container>
            <Navigation />
        </Container>

    );
};

export default Welcome;