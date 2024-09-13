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
                <StaticImage src="../images/i-wet-my-plants-title.png" alt="I Wet my Plants Cover" className="mb-3 w-100"/>

                <Container>
                    <Row>
                        <Col>
                            <h1 className={'h1'}>I Wet My Plants</h1>
                            <ul className="list-group mb-3">
                                <li className="list-group-item">
                                    <strong>Link:</strong> &nbsp;
                                    <a href="https://jkyuusai.itch.io/i-wet-my-plants"
                                       target={'_blank'}>https://jkyuusai.itch.io/i-wet-my-plants</a>
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
                        <Col sm={12} md={6}>
                            <StaticImage src="../images/i-wet-my-plants-gameplay-screenshot-1.png" alt="Lanternal Cover" className="w-100 mb-3"/>
                        </Col>
                        <Col sm={12} md={6}>
                            <StaticImage src="../images/i-wet-my-plants-gameplay-screenshot-2.png" alt="Lanternal Cover" className="w-100 mb-3"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h2>Description</h2>
                            <p>
                                <em>I Wet My Plants</em> is a whimsical twist on the classic Breakout game,
                                created for a game jam where the theme was "Everything is Alive."
                                In this game, you control a kodama, a forest spirit, tasked with watering trees and plants.
                                The kodama moves a paddle that directs a ball around the screen. As the ball moves, it absorbs water from puddles and rain clouds.
                                When it hits a tree or plant, it waters them, transforming their mood from angry to happy.
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
                                Implemented a water fill bar to show how much water the ball has absorbed from puddles and rain clouds.
                                Added a progress tracker to show what percentage of the trees and plants have been watered.
                            </p>
                            <p>
                                <strong>Character programming: </strong>
                                Programmed a rain cloud to move randomly across the screen, dropping raindrops that the ball can absorb.
                                Programmed trees and plants to change their mood from angry to happy when watered.
                            </p>
                            <p>
                                <strong>Gameplay Programming: </strong>
                                Implemented the core gameplay mechanics, including the movement of the kodama paddle and the ball.
                                Created the win condition for the game, where the player must water all the trees and plants to win.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </article>
        </Layout>
    );
};

export default Lanternal;