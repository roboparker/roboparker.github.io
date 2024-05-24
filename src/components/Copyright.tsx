import * as React from "react"
import {Container} from "react-bootstrap";
import styled from 'styled-components';

const StyledSection = styled.section`
    text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 1);
`;

const Copyright: React.FC = () => {
    return (
        <StyledSection className="text-white bg-dark pt-2 pb-2 text-md-center">
            <Container>
                &copy; {new Date().getFullYear()} All rights reserved
            </Container>
        </StyledSection>
    )
}

export default Copyright