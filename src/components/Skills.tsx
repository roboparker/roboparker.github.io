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
        <section className={'pt-5 pb-5'}>
            <Container>
                <h2>Skills</h2>
                <StyledDiv className={'text-center'}>
                    <Skill>
                        <i className="devicon-php-plain"></i>
                        <div>PHP</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-javascript-plain"></i>
                        <div>JavaScript</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-python-plain"></i>
                        <div>Python</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-cplusplus-plain"></i>
                        <div>C++</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-redis-plain"></i>
                        <div>Redis</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-postgresql-plain"></i>
                        <div>SQL</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-symfony-original"></i>
                        <div>Symfony</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-react-original"></i>
                        <div>React</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-wordpress-plain"></i>
                        <div>WordPress</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-gatsby-original"></i>
                        <div>Gatsby</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-unrealengine-original"></i>
                        <div>Unreal Engine</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-amazonwebservices-plain-wordmark"></i>
                        <div>AWS</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-docker-plain"></i>
                        <div>Docker</div>
                    </Skill>
                    <Skill>
                        <i className="devicon-kubernetes-plain"></i>
                        <div>K8s</div>
                    </Skill>
                </StyledDiv>
            </Container>
        </section>
    );
};

export default Skills;