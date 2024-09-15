import React from 'react';
import {Container} from "react-bootstrap";
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 128px;
`;

const Skill = styled.div`
    display: inline-block;
    padding: 1rem;
    width: 50%;
    text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
    
    @media (min-width: 768px) {
        width: auto;
    }
    
    i {
        display: inline-block;
        font-size: 4rem;
        text-align: end;
        
        @media (min-width: 768px) {
            font-size: 8rem;
        }
    }
    
    div {
        font-size: 2rem;
        margin-top: -2rem;
    }
`;

const Skills: React.FC = () => {
    return (
        <section className={'pt-5 pb-5 bg-light text-dark'}>
            <Container>
                <StyledDiv className={'text-center'}>
                    <Skill>
                        <i className="devicon-symfony-original"></i>
                        <div>Symfony</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-wordpress-plain"></i>
                        <div>WordPress</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-react-original"></i>
                        <div>React</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-unrealengine-original"></i>
                        <div>Unreal Engine</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-unity-plain"></i>
                        <div>Unity</div>
                    </Skill>
                </StyledDiv>
            </Container>
        </section>
    );
};

export default Skills;