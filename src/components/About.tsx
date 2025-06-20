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
                    I’m a game developer on a quest to turn small ideas into meaningful adventures. Over the years, I’ve collaborated on a variety of game jam projects—leading teams, writing code, and building everything from cozy puzzle games to bullet-hell shooters.
                </p>
                <p>
                    I specialize in gameplay programming and rapid prototyping using Godot, Unity and Unreal Engine, and I enjoy crafting systems that feel good to play and easy to expand. Whether I’m leading a jam team, fixing a tricky bug at 3 AM, or experimenting with quirky mechanics, I’m always driven by a love for storytelling through interaction.
                </p>
                <p>
                    When I'm not coding, you’ll probably find me sketching out game ideas, chatting with fellow devs in the local area, or testing out new systems just to see what breaks.
                </p>
            </Container>
        </StyledSection>
    )
}

export default About