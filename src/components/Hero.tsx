import * as React from "react"
import {Container} from "react-bootstrap";
import styled from 'styled-components';
import HeroImage from "../images/AdobeStock_183319570.webp";

const StyledSection = styled.section`
    background-color: #ffec00;
    text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);

    @media (min-width: 1200px) {
        background: #ffec00 url(${HeroImage}) no-repeat center center;
        background-position: bottom right;
        background-size: cover;
        min-height: min(100vh, 800px); // Adjust this value as needed
    }
`;

const Hero: React.FC = () => {
    return (
        <StyledSection className={'d-lg-flex align-items-center pt-5 pb-5'}>
            <Container>
                <div>
                    <h1 className={'h1'}>
                        <strong>
                            Hello, I'm Robert Parker
                        </strong>
                    </h1>
                    <p className={'h4'}>
                        <strong>
                            I create interactive experiences for the web and games.
                        </strong>
                    </p>
                </div>
            </Container>
        </StyledSection>
    )
}

export default Hero