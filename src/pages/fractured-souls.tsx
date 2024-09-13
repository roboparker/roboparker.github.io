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
                <StaticImage src="../images/fractured-soul-title.jpg" alt="Fractured Souls" className="mb-3 w-100"/>

                <Container>
                    <Row>
                        <Col>
                            <h1 className={'h1'}>Fractured Soul</h1>
                            <ul className="list-group mb-3">
                                <li className="list-group-item">
                                    <strong>Link:</strong> &nbsp;
                                    <a href="https://roboparker.itch.io/fractured-soul"
                                       target={'_blank'}>https://roboparker.itch.io/fractured-soul</a>
                                </li>
                                <li className="list-group-item">
                                    <strong>Theme:</strong> &nbsp;
                                    Everything is Alive
                                </li>
                                <li className="list-group-item">
                                    <strong>Duration:</strong> &nbsp;
                                    1 Week
                                </li>
                                <li className="list-group-item">
                                    <strong>Team Size:</strong> &nbsp;
                                    7
                                </li>
                                <li className="list-group-item">
                                    <strong>Role:</strong> &nbsp;
                                    Programmer, Designer, Producer
                                </li>
                                <li className="list-group-item">
                                    <strong>Tools Users:</strong> &nbsp;
                                    Unity, Git, Rider, New Input Plus, Cinemachine
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <StaticImage src="../images/i-wet-my-plants-gameplay-screenshot-1.png" alt="Lanternal Cover" className="w-100 mb-3"/>
                        </Col>
                        <Col>
                            <StaticImage src="../images/i-wet-my-plants-gameplay-screenshot-2.png" alt="Lanternal Cover" className="w-100 mb-3"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2>Description</h2>
                            <p>
                                <em>Fractured</em> Soul is a twin-stick shooter created for the Global Game Jam, inspired by the theme "Repair." In this game,
                                players must defend a central fountain from waves of cracked enemies, drawing inspiration from the Japanese art of kintsugi—repairing broken pottery with gold.
                                As you shoot the enemies, they freeze in place, and their cracks are mended with gold.
                                A second shot makes the repaired enemies disappear, symbolizing their transformation and restoration.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>My Contributions</h3>
                            <p>
                                <strong>Core Gameplay Mechanics: </strong> Developed the twin-stick shooting mechanics, ensuring smooth and responsive controls for an intense and satisfying gameplay experience.
                            </p>
                            <p>
                                <strong>Enemy Repair System: </strong> the system where shooting cracked enemies freezes them and mends their cracks with gold, inspired by kintsugi.
                            </p>
                            <p>
                                <strong>Wave Management: </strong> the enemy wave system, spawning increasingly challenging waves of enemies as the game progresses.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </article>
        </Layout>
    );
};

export default Lanternal;