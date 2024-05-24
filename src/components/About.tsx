import * as React from "react"
import {Container} from "react-bootstrap";
import styled from 'styled-components';

const StyledSection = styled.section`
    text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 1);
`;

const About: React.FC = () => {
    return (
        <StyledSection className="text-white bg-dark pt-5 pb-5">
            <Container>
                <h2>About</h2>
                <p>
                    I am a passionate web and game developer with over a decade of experience in crafting innovative and efficient digital solutions.
                    My approach to development is rooted in creating digital experiences that are not only functional but also engaging and user-friendly.
                    With a strong background in both backend and frontend technologies, I bridge the gap between design and functionality
                </p>
                <p>
                    I believe in the power of collaboration and am always excited to take on new challenges,
                    whether it’s a custom web solution, or game development.
                    Let's connect and create something amazing together!
                </p>
            </Container>
        </StyledSection>
    )
}

export default About