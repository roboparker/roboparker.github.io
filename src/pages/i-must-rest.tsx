import * as React from "react"
import type { PageProps } from "gatsby"
import '../styles/global.scss';
import Layout from '../components/Layout';
import {Col, Container, Row} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image"

const Lanternal: React.FC = () => {
    return (
        <Layout>
            <article>
                <StaticImage src="../images/i-must-rest-gameplay-screenshot-1.png" alt="Fractured Souls" className="mb-3 w-100"/>

                <Container>
                    <Row>
                        <Col>
                            <h1 className={'h1'}>I Must Rest</h1>
                            <ul className="list-group mb-3">
                                <li className="list-group-item">
                                    <strong>Link:</strong> &nbsp;
                                    <a href="https://roboparker.itch.io/i-must-rest"
                                       target={'_blank'}>https://roboparker.itch.io/i-must-rest</a>
                                </li>
                                <li className="list-group-item">
                                    <strong>Theme:</strong> &nbsp;
                                    What Home Means to You
                                </li>
                                <li className="list-group-item">
                                    <strong>Duration:</strong> &nbsp;
                                    2 Days
                                </li>
                                <li className="list-group-item">
                                    <strong>Team Size:</strong> &nbsp;
                                    4
                                </li>
                                <li className="list-group-item">
                                    <strong>Role:</strong> &nbsp;
                                    Programmer, Producer
                                </li>
                                <li className="list-group-item">
                                    <strong>Tools Users:</strong> &nbsp;
                                    Unity, Git, Rider, New Input Plus, Cinemachine
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={6}>
                            <StaticImage src="../images/i-must-rest-gameplay-screenshot-2.png" alt="Lanternal Cover" className="w-100 mb-3"/>
                        </Col>
                        <Col sm={12} md={6}>
                            <StaticImage src="../images/i-must-rest-gameplay-screenshot-3.png" alt="Lanternal Cover" className="w-100 mb-3"/>
                        </Col>
                        <Col sm={12} md={6}>
                            <StaticImage src="../images/i-must-rest-gameplay-screenshot-4.png" alt="Lanternal Cover" className="w-100 mb-3"/>
                        </Col>
                        <Col sm={12} md={6}>
                            <StaticImage src="../images/i-must-rest-gameplay-screenshot-5.png" alt="Lanternal Cover" className="w-100 mb-3"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2>Description</h2>
                            <p>
                                <em>I must rest</em> is a game create for a Global Game Jam.
                                We developed a game centered around the theme "What Home Means to You".
                                In this relaxing, exploration-based game, players navigate a home environment, seeking out different activities to help them unwind before heading to bed.
                                The game focuses on creating a calming atmosphere where players interact with objects and complete small tasks to lower their stress levels
                                and achieve a peaceful state before ending the day by going to bed.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>My Contributions</h3>
                            <p>
                                <strong>Production and Team Management: </strong>
                                As the producer, I organized and managed the team members,
                                ensuring that each person had a clear set of tasks and that the project stayed on track.
                            </p>
                            <p>
                                <strong>UI Programming: </strong>
                                created the UI for the interaction with objects.
                            </p>
                            <p>
                                <strong>Character programming: </strong>
                                Programmed character movement and interactions with objects.
                            </p>
                            <p>
                                <strong>Gameplay Programming: </strong>
                                Implemented the core gameplay mechanic.
                                Interacting with an object brings up a bar with a slider that needs the input to be timed correctly to lower stress levels.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </article>
        </Layout>
    );
};

export default Lanternal;