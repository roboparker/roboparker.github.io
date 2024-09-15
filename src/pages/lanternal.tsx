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
                <StaticImage src="../images/lanternal-title.png" alt="Lanternal Cover" className="w-100"/>

                <Container className="bg-white p-4">
                    <Row>
                        <Col>
                            <h1 className={'h1'}>Lanternal</h1>
                            <ul className="list-group mb-3">
                                <li className="list-group-item">
                                    <strong>Link:</strong> &nbsp;
                                    <a href="https://pfarnach.itch.io/lanternal"
                                       target={'_blank'}>https://pfarnach.itch.io/lanternal</a>
                                </li>
                                <li className="list-group-item">
                                    <strong>Theme:</strong> &nbsp;
                                    Sacrifices Must Be Made
                                </li>
                                <li className="list-group-item">
                                    <strong>Duration:</strong> &nbsp;
                                    72 hours
                                </li>
                                <li className="list-group-item">
                                    <strong>Team Size:</strong> &nbsp;
                                    7
                                </li>
                                <li className="list-group-item">
                                    <strong>Role:</strong> &nbsp;
                                    Programmer
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
                            <StaticImage src="../images/lanternal-gameplay-screenshot.png" alt="Lanternal Cover" className="img-fluid mb-3"/>
                        </Col>
                        <Col>
                            <StaticImage src="../images/lanternal-game-ui-screenshot.png" alt="Lanternal Cover" className="img-fluid mb-3"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2>Description</h2>
                            <p>
                                <em>Lanternal</em> is a fast-paced bullet hell shooter developed in just 72 hours for
                                the
                                Ludum Dare 43 game jam. The theme for the jam was "Sacrifices Must Be Made," which we
                                creatively incorporated into the gameplay mechanics. In <em>Lanternal</em>, you play as
                                a
                                young mage tasked with defeating enemies and capturing their souls. As the game
                                progresses,
                                a demon appears at regular intervals, demanding that you sacrifice some of your power in
                                order to continue.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>My Contributions</h3>
                            <p>
                                <strong>UI Programming: </strong>
                                Developed the user interface to ensure it was intuitive and responsive,
                                keeping the player informed and engaged during intense gameplay.
                            </p>
                            <p>
                                <strong>Shooting Mechanics: </strong>
                                Implemented the core shooting mechanics,
                                ensuring smooth and responsive controls that are crucial for a bullet hell experience.
                            </p>
                            <p>
                                <strong>Enemy Spawning: </strong>
                                Designed and programmed the enemy spawning and UI system,
                                ensuring a challenging and dynamic experience with waves of foes appearing at strategic intervals.
                            </p>

                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2 className={'h2'}>Reviews</h2>
                        </Col>
                    </Row>
                    <Row className={'mb-4'}>
                        <Col>
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/B0W8hfdHwHs?rel=0" title="YouTube video"
                                        allowFullScreen></iframe>
                            </div>
                        </Col>
                        <Col>
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/TQGL50rxTLI?rel=0" title="YouTube video"
                                        allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </article>
        </Layout>
    );
};

export default Lanternal;